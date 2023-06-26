import { SiteHeader } from "@/components/site-header";

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
