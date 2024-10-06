import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./schema/User";
import { compare } from "bcryptjs";

export const { handler, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          throw new Error("Please provide both email & password");
        }
        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("Invalid username or password");
        }

        if (!password) {
          throw new Error("Invalid password");
        }

        const isMatching = await compare(password, user.password);

        if (!isMatching) {
          throw new Error("Password mismatch");
        }

        const userData = {
          firstName: user.firstName,
          lasName: user.lasName,
          email: user.email,
          role: user.role,
          id: user._id,
        };
        return userData;
      },
    }),
  ],
});
