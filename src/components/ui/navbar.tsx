"use client";
import { Slide } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        {/*@ts-ignore*/}
        <h1 end="X">INHA</h1>
      </Link>
      <div>
        <ul>
          <li>
            <Link href="/blog" className="nav-item">
              Blog
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              Naves
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              Viagens
            </Link>
          </li>
          {session.status === "authenticated" ? (
            <div className="user-acc-link" onClick={() => setOpen(true)}>
              <FiUser size={28} className="text-red-500" />
              <span className="text-lg text-red-500 ml-1">
                {session.data?.user?.name}
              </span>
            </div>
          ) : session.status === "unauthenticated" ? (
            <span
              className="text-red-500 text-xl hover:cursor-pointer"
              onClick={() => router.push("/auth/login")}
            >
              Entrar
            </span>
          ) : (
            <span className="text-red-500 text-lg">Carregando...</span>
          )}
        </ul>
      </div>
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <div className="lateral-account-nav" id="lateral-account-nav">
          <div className="line justify-between items-end">
            <h2>{session.data?.user?.name}</h2>
            <a onClick={() => setOpen(false)} className="icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="line">
            <div className="stroke"></div>
          </div>
          <div className="line">
            <button
              onClick={() => signOut()}
              className="lateral-account-nav-btn p-4"
            >
              <IoExitOutline size={20} className="mr-2" />
              Sair
            </button>
          </div>
        </div>
      </Slide>
    </nav>
  );
}
