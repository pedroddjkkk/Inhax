import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InhaX",
  description: "Simplificando viagens espaciais",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
