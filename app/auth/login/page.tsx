import Heading from "@/src/shared/components/typography/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
};

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>
      <Heading level={2}>Iniciar Sesión</Heading>
      <Heading level={5}>Iniciar Sesión</Heading>
      <Heading level={6}>Iniciar Sesión</Heading>
    </>
  );
}
