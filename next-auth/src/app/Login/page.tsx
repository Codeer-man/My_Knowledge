import { login } from "@/action/user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LogIn() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border[#121212] dark:bg-black">
      <form action={login} className="my-8">
        <Label htmlFor="Email">Email</Label>
        <Input
          id="Email"
          type="email"
          placeholder="Email address"
          name="enail"
          required
        />
        <Label htmlFor="Password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="********************"
          name="password"
          required
          hidden
          className="mb-6"
        />

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
            to-neutral-600 block dark:bg-zinc-900 w-full text-white rounded-md h-10 font-medium shadow:from-zinc-900
            dark:shadow-zinc-500 "
        >
          LogIn &rarr;
        </button>

        <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 border-b-2 px-3 dark:text-neutral-300">
          Do not have a account? <Link href="/Register">Register</Link>
        </p>

        <section className="flex flex-col space-y-4">
          <form action="">
            <button
              className="flex mt-6 gap-3 items-center w-full "
              type="submit"
            >
              <FaGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                GitHub
              </span>
            </button>
          </form>
          <form action="">
            <button
              className="flex mt-3 gap-3 items-center w-full "
              type="submit"
            >
              <FaGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                Google
              </span>
            </button>
          </form>
        </section>
      </form>
    </div>
  );
}
