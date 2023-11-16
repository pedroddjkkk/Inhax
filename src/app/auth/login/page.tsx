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

const schema = z.object({
  username: z
    .string({ required_error: "Campo obrigatório" })
    .min(3, "Deve conter no mínimo 3 caracteres")
    .max(255, "Deve conter no máximo 255 caracteres"),
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
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof schema>) {
    const login = await signIn("credentials", {
      name: data.username,
      password: data.password,
      redirect: false,
    });

    if (login?.error) {
      setError(true);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="w-screen h-screen bg-[#FF3131] flex justify-center items-center">
      <div className="flex flex-row w-[80%] h-[730px] rounded-md bg-white">
        <form
          className="w-[35%] flex flex-col items-center px-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl font-semibold mt-6">Login</h1>
          <h2 className="text-lg mb-6 mt-2">Faça o login para entrar!</h2>
          <div className="mt-12" />
          <TextField
            id="username"
            label="Usuário"
            variant="outlined"
            fullWidth
            {...register("username")}
          />
          {errors.username && (
            <span className="text-md text-slate-500 mt-2">
              {errors.username.message}
            </span>
          )}
          <div className="w-full flex flex-col items-end">
            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              fullWidth
              type="password"
              sx={{
                marginTop: "30px",
              }}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-md text-slate-500 mt-2">
                {errors.password.message}
              </span>
            )}
            <span className="text-md text-[#FF3131] mt-2">
              Esqueci minha senha
            </span>
          </div>
          {error && (
            <span className="text-slate-500 text-sm mt-2">
              Email ou senha incorretos
            </span>
          )}
          <Button
            variant="contained"
            fullWidth
            sx={{ padding: "6px", marginTop: "28px" }}
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <Image
          src={loginImage}
          alt="Imagem Login"
          className="w-[65%] h-auto object-cover rounded-e-md"
        />
      </div>
    </div>
  );
}
