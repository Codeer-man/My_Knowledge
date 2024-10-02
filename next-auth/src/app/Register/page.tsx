
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {register} from "@/action/user"

import Link from "next/link";


export default async function Register() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border[#121212] dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 darK:text-neutral-200">
        Welcome To MyShop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>

      <form  action={register} className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col">
            <Label htmlFor="First Name" className="mb-2 ">
              First Name
            </Label>
            <Input
              id="first Name"
              placeholder="Tyler"
              type="text"
              name="firstname"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="Last Name" className="mb-2">
              last Name
            </Label>
            <Input
              id="last Name"
              placeholder="Dura"
              type="text"
              name="lastname"
            />
          </div>
        </div>
        <Label htmlFor="Email">Email Address </Label>
        <Input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          
        />
        <Label htmlFor="Password">Password </Label>
        <Input
          id="password"
          type="password"
          placeholder="***********"
          name="password"
          hidden
         
          className="mb-5"
        />
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
            to-neutral-600 block dark:bg-zinc-900 w-full text-white rounded-md h-10 font-medium shadow:from-zinc-900
            dark:shadow-zinc-500">
          Sign Up &rarr;
        </button>
        <p className="mt-2 text-neutral-600 text-sm max-w-sm">
          Already Have a Account? <Link href="/Login">LogIn</Link>
        </p>
      </form>
    </div>
  );
}
