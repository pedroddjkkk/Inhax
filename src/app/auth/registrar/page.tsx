"use client";
import Image from "next/image";
import loginImage from "@/images/image-login.png";
import { Button, TextField, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const schema = z
  .object({
    username: z
      .string({ required_error: "Campo obrigatório" })
      .min(3, "Deve conter no mínimo 3 caracteres")
      .max(255, "Deve conter no máximo 255 caracteres"),
    email: z
      .string({ required_error: "Campo obrigatório" })
      .email("Email inválido"),
    password: z.string().refine(
      (value: string) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[@$!%*#?&]/.test(value);

        return (
          value.length >= minLength &&
          hasUpperCase &&
          hasLowerCase &&
          hasNumber &&
          hasSpecialChar
        );
      },
      {
        message:
          "A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
      }
    ),
    confirmPassword: z.string().refine((value: string) => {
      const minLength = 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[@$!%*#?&]/.test(value);

      return (
        value.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar
      );
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não se coincidem",
    path: ["confirm"],
  });

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    criteriaMode: "firstError",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof schema>) {
    const res = await axios.post("/api/user", data);

    if (res.status == 200) {
      router.push("/auth/login");
    }
  }

  return (
    <div className="w-screen h-screen bg-[#FF3131] flex justify-center items-center">
      <div className="flex flex-row w-[80%] min-h-[730px] rounded-md bg-white">
        <form
          className="w-full lg:w-[35%] flex flex-col items-center px-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl font-semibold mt-6">Registrar-se</h1>
          <h2 className="text-lg mb-6 mt-2">
            Faça o registro para criar um conta!
          </h2>
          <div className="mt-12" />
          <TextField
            id="username"
            label="Usuário"
            variant="outlined"
            fullWidth
            {...register("username")}
          />
          {errors.username && (
            <span className="text-sm text-slate-500 mt-2">
              {errors.username.message}
            </span>
          )}
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{
              marginTop: "20px",
            }}
            fullWidth
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-slate-500 mt-2">
              {errors.email.message}
            </span>
          )}
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            fullWidth
            type="password"
            sx={{
              marginTop: "20px",
            }}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-sm text-slate-500 mt-2">
              {errors.password.message}
            </span>
          )}{" "}
          <TextField
            id="confirmPassword"
            label="Confirmar Senha"
            variant="outlined"
            fullWidth
            type="password"
            sx={{
              marginTop: "20px",
            }}
            {...register("confirmPassword")}
          />
          {errors.password && (
            <span className="text-sm text-slate-500 mt-2">
              {errors.password.message}
            </span>
          )}
          {error && (
            <span className="text-slate-500 text-sm mt-2">
              Email ou senha incorretos
            </span>
          )}
          <Button
            variant="contained"
            fullWidth
            sx={{ padding: "6px", marginTop: "60px", marginBottom: "20px" }}
            type="submit"
          >
            Registrar
          </Button>
          <span className="text-md text-slate-500 mb-4">
            Já tem uma conta?{" "}
            <Link className="text-[#FF3131]" href={"/auth/login"}>
              Realize o login!
            </Link>
          </span>
        </form>
        <Image
          src={loginImage}
          alt="Imagem Login"
          className="w-[65%] h-auto object-cover rounded-e-md hidden lg:block"
        />
      </div>
    </div>
  );
}
