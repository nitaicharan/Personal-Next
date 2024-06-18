import Footer from "../Footer";
import Header from "../Header";

export type TopNavLayoutProps = {
  children: React.ReactNode;
};

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>;
      <Footer />
    </>
  );
}
