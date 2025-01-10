export interface iButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
  children: React.ReactNode;
}
