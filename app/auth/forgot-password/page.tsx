import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle("Reestablecer Password"),
};

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acesso a Meeti</Heading>
      <ForgotPasswordForm />
    </>
  );
}
