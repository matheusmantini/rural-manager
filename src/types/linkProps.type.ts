export interface iLinkProps {
  to: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
  children: React.ReactNode;
}
