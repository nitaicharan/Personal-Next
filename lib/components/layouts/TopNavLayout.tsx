import Footer from "../Footer";
import Header from "../Header";

export type TopNavLayoutProps = {
  header?: boolean;
  footer?: boolean;
  children: React.ReactNode;
};

export default function TopNavLayout({
  children,
  header = true,
  footer = true,
}: TopNavLayoutProps) {
  return (
    <>
      {header && <Header />}
      <main>{children}</main>;
      {footer && <Footer />}
    </>
  );
}
