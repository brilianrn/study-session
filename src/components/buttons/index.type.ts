export interface ButtonProps {
  title: string;
  type: 'primary' | 'danger' | 'secondary' | 'warning' | 'success';
  disabled?: boolean;
  className?: string;
  icon?: string;
  iconPosition?: 'right' | 'left';
  iconClassName?: string;
  onClick?: () => void;
}
