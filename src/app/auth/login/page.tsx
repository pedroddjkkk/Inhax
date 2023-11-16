"use client";
import Image from "next/image";
import loginImage from "@/images/image-login.png";
import { Button, TextField, useTheme } from "@mui/material";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-[#FF3131] flex justify-center items-center">
      <div className="flex flex-row w-[80%] h-[730px] rounded-md bg-white">
        <div className="w-[35%] flex flex-col items-center px-16">
          <h1 className="text-3xl font-semibold mt-6">Login</h1>
          <h2 className="text-lg mb-6 mt-2">Faça o login para entrar!</h2>
          <div className="mt-12" />
          <TextField id="name" label="Usuário" variant="outlined" fullWidth />
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
            />
            <span className="text-md text-[#FF3131] mt-2">Esqueci minha senha</span>
          </div>
          <Button variant="contained">Entrar</Button>
        </div>
        <Image
          src={loginImage}
          alt="Imagem Login"
          className="w-[65%] h-auto object-cover rounded-e-md"
        />
      </div>
    </div>
  );
}
