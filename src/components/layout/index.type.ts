export interface DashboardProps {
  children: React.ReactNode;
  title: string;
  useBackButton?: boolean;
  useProfileButton?: boolean;
}

export interface BackButtonProps {
  title: string;
}
