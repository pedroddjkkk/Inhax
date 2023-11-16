"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a href="index.php">
        {/*@ts-ignore*/}
        <h1 end="X">INHA</h1>
      </a>
      <div>
        <ul>
          <li>
            <a href="/app/blog.php" className="nav-item">
              Blog
            </a>
          </li>
          <li>
            <a href="" className="nav-item">
              Naves
            </a>
          </li>
          <li>
            <a href="" className="nav-item">
              Viagens
            </a>
          </li>
          <div className="user-acc-link" onClick={() => setOpen(true)}>
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#ff3131"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
            <a>Danillo Pitta</a>
          </div>
        </ul>
      </div>
      <div className="lateral-account-nav hide" id="lateral-account-nav">
        <div className="line" style={{ justifyContent: "space-between" }}>
          <h2></h2>
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
          <a href="/app/logout.php" className="lateral-account-nav-btn">
            Sair
          </a>
        </div>
      </div>
    </nav>
  );
}
