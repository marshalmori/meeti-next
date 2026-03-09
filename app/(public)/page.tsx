import Hero from "@/src/shared/components/ui/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeti - Inicio",
  description: "Proyecto Meeti Next.js con DrizzleORM",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
