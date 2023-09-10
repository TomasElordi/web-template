"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="grid grid-cols-2 gap-2 p-1">
      <button
        className="border border-black dark:border-white rounded p-1"
        onClick={() => signIn("google")}
      >
        Iniciar sesion con Google
      </button>
      <div className="border border-black dark:border-white rounded p-1 cursor-pointer">
        Iniciar sesion con Email
      </div>
    </div>
  );
}
