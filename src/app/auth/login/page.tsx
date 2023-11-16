"use client";
import Image from "next/image";
import loginImage from "@/images/image-login.png";
import { TextField, useTheme } from "@mui/material";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-[#FF3131] flex justify-center items-center">
      <div className="flex flex-row w-[80%] h-[730px] rounded-md bg-white">
        <div className="w-[35%] flex flex-col items-center">
          <h1 className="text-4xl font-semibold my-12">Login</h1>
          <TextField id="name" label="Usuário" variant="outlined" />
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
