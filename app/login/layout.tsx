import TopNavLayout from "@/lib/components/layouts/TopNavLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TopNavLayout>{children}</TopNavLayout>;
}
