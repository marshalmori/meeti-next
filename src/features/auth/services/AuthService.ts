import { SignUpInput } from "../schemas/authSchema";
import { auth } from "@/lib/auth";

class AuthService {
  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    // Revisar si el usuario existe

    // Validación de negocio

    // Manejar el registro

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
  }
}

export const authService = new AuthService();
