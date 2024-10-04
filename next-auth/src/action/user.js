"use server";

import { User } from "@/app/Models/User";
import connectDB from "@/lib/db";
import { redirect } from "next/navigation";
import {hash} from "bcryptjs";
import { signIn } from "next-auth/react";
import { CredentialsSignin } from "next-auth";

const login = async(formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn('credentials',{
      redirect: false,
      callbackUrl: '/',
      email,
      password

    })
  } catch (error) {
    const someError = error as CredentialsSignin ;
    return someError.cause;
  }
}

const register = async (formData) => {
  const firstName = formData.get("firstname"); // Adjusted case
  const lastName = formData.get("lastname"); // Adjusted case
  const email = formData.get("email");
  const password = formData.get("password");

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all the fields");
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hash(password, 10);

  await User.create({ firstName, lastName, email, password: hashedPassword });
  console.log("Successfully created");

  return redirect("/Login");
};

export { register,login };
