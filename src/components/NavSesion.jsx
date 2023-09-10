/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import SignIn from "./SignIn";

export default function NavSesion() {
  const { data: session, status } = useSession();
  return (
    <>
      {session ? (
        <div className="grid grid-cols-2 gap-1">
          <div className="flex ">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={session.user.image}
              alt={session.user.name}
            />
            <p>{session.user.name}</p>
          </div>
          <button
            className="border border-black dark:border-white rounded p-1"
            onClick={() => signOut()}
          >
            Cerrar sesion
          </button>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}
