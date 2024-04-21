import { connectToDB } from "@/database/db";
import UserModel from "@/models/userModel";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await UserModel.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      session.user.isAdmin = sessionUser.isAdmin;
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        const userExists = await UserModel.findOne({ email: profile.email });
        if (!userExists) {
          await UserModel.create({
            email: profile.email,
            username: profile.name,
          });
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
};
