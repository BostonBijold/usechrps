import {
  ClipboardList,
  Nfc,
  BarChart3,
  Flame,
  Clock,
  Repeat,
  Bell,
  Receipt,
  Package,
  Users,
  WifiOff,
  Lock,
  UtensilsCrossed,
  Dumbbell,
  FlaskConical,
  Hotel,
  CircleHelp,
  type LucideIcon,
} from "lucide-react";

/**
 * Same pattern as the app's own components/AppIcon.tsx — a stored icon key
 * mapped to a single Lucide icon component. Keys here only cover what the
 * marketing site itself renders (feature + vertical icons), not the app's
 * full task-icon catalog.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  "clipboard-list": ClipboardList,
  nfc: Nfc,
  "bar-chart": BarChart3,
  flame: Flame,
  clock: Clock,
  repeat: Repeat,
  bell: Bell,
  receipt: Receipt,
  package: Package,
  users: Users,
  "wifi-off": WifiOff,
  lock: Lock,
  restaurants: UtensilsCrossed,
  gyms: Dumbbell,
  labs: FlaskConical,
  hotels: Hotel,
};

export default function AppIcon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? CircleHelp;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
