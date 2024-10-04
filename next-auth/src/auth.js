import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./app/Models/User";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email and password");
        }
        await connectDB();

        const user = await User.findOne({ email }).select("+password + roll");

        if (!user) {
          throw new Error("Invalid credentials");
        }

        if (!user.password) {
          throw new Error("Invalid credentials");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password is not matching ");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          roll: user.roll,
          id: user._id,
        };
        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
    verifyRequest: "/verify/[...nextauth]",
    newUser: "/new-user",
  }
});
