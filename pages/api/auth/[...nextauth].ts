import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import CredentialsProvider from "next-auth/providers/credentials";
import { createUser } from '../../../lib/createUser';

import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { compare } from "bcryptjs";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          profileFields: ['name', 'email'], 
        }),
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        InstagramProvider({
          clientId: process.env.INSTAGRAM_CLIENT_ID,
          clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        }),
        CredentialsProvider({
          name: "Credentials",
          async authorize(credentials, req) {
            dbConnect().catch(error => { error: "Connection Failed...!"});

            //check user existance
            const result = await User.findOne({ email: credentials.email});
            if(!result){
              throw new Error("No user Found with Email Please Sign Up...!")
            }

            //compare()
            const checkPassword = await compare(credentials.password, result.password);

            //incorrect password 
            if(!checkPassword || result.email !== credentials.email) {
              throw new Error("Username or Password does't match")
            }


            return result;
          }
        })
    ],
    callbacks: {
      async signIn(user, account, profile) {
        // Обробник викликається при успішному вході в систему
        // Тут ви можете зберегти дані користувача у базі даних
        const currentDate = new Date();

         // Перевірка існування користувача перед створенням нового запису
        const existingUser = await User.findOne({ email: user.user.email });
        if (existingUser) {
        throw new Error("User already exists"); // Кидаємо помилку, якщо користувач вже існує
        }
        
        const userData = {
          // Ви можете вибрати, які дані зберегти
          name: user.user.name,
          email: user.user.email,
          createdAt: currentDate,

          // Інші поля, які ви хочете зберегти
        };
  
        await createUser(userData);
  
        return true; // Повертає true, щоб дозволити вхід в систему
      },
    },
})