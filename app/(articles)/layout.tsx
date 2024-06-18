import type { Metadata } from "next";
import TopNavLayout from "@/lib/components/layouts/TopNavLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TopNavLayout footer={false}>{children}</TopNavLayout>;
}