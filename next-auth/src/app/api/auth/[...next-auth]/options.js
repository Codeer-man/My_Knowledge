import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const Options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub user";
        if (profile?.email == "mdrmoney34@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google:", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks:{
    async jwt({tokens,user}){
      if(user) tokens.role = user.role
      return tokens
    },
    async session({token,session}){
      if(session?.user)  session.user.role = token.role
      return session
    }
  }
};
