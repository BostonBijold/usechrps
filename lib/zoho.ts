const ACCOUNTS_DOMAIN = process.env.ZOHO_ACCOUNTS_DOMAIN || "https://accounts.zoho.com";
const API_DOMAIN = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.com";

let cachedAccessToken: { token: string; expiresAt: number } | undefined;

async function getAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Zoho CRM credentials are not configured");
  }

  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now()) {
    return cachedAccessToken.token;
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
  });

  const res = await fetch(`${ACCOUNTS_DOMAIN}/oauth/v2/token?${params.toString()}`, {
    method: "POST",
  });

  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Failed to refresh Zoho access token: ${JSON.stringify(data)}`);
  }

  // expires_in is in seconds; refresh a little early to avoid edge-of-expiry failures.
  cachedAccessToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cachedAccessToken.token;
}

export type ZohoLeadFields = {
  Last_Name: string;
  First_Name?: string;
  Company: string;
  Email?: string;
  Phone?: string;
  Description?: string;
  Lead_Source?: string;
};

export async function createZohoLead(fields: ZohoLeadFields): Promise<string> {
  const accessToken = await getAccessToken();

  const res = await fetch(`${API_DOMAIN}/crm/v6/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [fields], trigger: [] }),
  });

  const data = await res.json().catch(() => ({}));
  const record = data?.data?.[0];
  if (!res.ok || record?.status !== "success") {
    throw new Error(`Failed to create Zoho lead: ${JSON.stringify(data)}`);
  }
  return record.details.id as string;
}

export type ZohoTaskFields = {
  Subject: string;
  Who_Id: string;
  Description?: string;
  Due_Date?: string;
  Priority?: "High" | "Normal" | "Low";
};

/** Creates a Task linked to a Lead record, so it shows up (with Zoho's own reminders) in the CRM. */
export async function createZohoLeadTask(fields: ZohoTaskFields): Promise<void> {
  const accessToken = await getAccessToken();

  const res = await fetch(`${API_DOMAIN}/crm/v6/Tasks`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          ...fields,
          $se_module: "Leads",
          Status: "Not Started",
        },
      ],
      trigger: [],
    }),
  });

  const data = await res.json().catch(() => ({}));
  const record = data?.data?.[0];
  if (!res.ok || record?.status !== "success") {
    throw new Error(`Failed to create Zoho task: ${JSON.stringify(data)}`);
  }
}

/** Splits a full name into first/last for Zoho's separate name fields; Last_Name is required. */
export function splitName(fullName: string): { firstName?: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) {
    return { lastName: parts[0] || fullName };
  }
  return { firstName: parts.slice(0, -1).join(" "), lastName: parts[parts.length - 1] };
}
