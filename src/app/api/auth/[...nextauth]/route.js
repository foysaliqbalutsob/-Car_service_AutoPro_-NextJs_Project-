import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";



export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        try {
          // First check database for registered users
          const client = await clientPromise;
          const db = client.db(process.env.DB_NAME);
          const dbUser = await db.collection("users").findOne({ email });

          if (dbUser) {
            // Verify password with bcrypt
            const isPasswordValid = await bcrypt.compare(
              password,
              dbUser.password
            );

            if (isPasswordValid) {
              return {
                id: dbUser._id.toString(),
                email: dbUser.email,
                name: `${dbUser.firstName} ${dbUser.lastName}`,
              };
            }
          }

          // Fallback to hardcoded user list for demo users
          const demoUser = userList.find((u) => u.email === email);
          if (demoUser && demoUser.password === password) {
            return {
              id: email,
              email: demoUser.email,
              name: "Demo User",
            };
          }

          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
