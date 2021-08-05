export interface SocialLoginButtonProps {
    className?: string;
    color?: "inherit" | "primary" | "secondary" | "default" | undefined;
    icon: React.ReactNode;
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}
