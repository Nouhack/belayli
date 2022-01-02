import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);
export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        matricule: { label: "Matricule", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await client.connect();

        const student = await client
          .db("mehdi")

          .collection("student")

          .findOne({
            matricule: credentials.matricule,
            password: credentials.password,
          });

        const teacher = await client
          .db("mehdi")

          .collection("teacher")

          .findOne({
            matricule: credentials.matricule,
            password: credentials.password,
          });

        if (student) {
          return {
            name: "student",
            email: student.name + " " + student.username,
            image: student._id,
          };
        } else if (teacher) {
          return {
            name: "teacher",
            email: teacher.name + " " + teacher.username,
            image: teacher._id,
          };
        } else if (
          credentials.matricule == "admin" &&
          credentials.password == "123"
        ) {
          return {
            name: "admin",
            email: "admin",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      console.log("hada hwa ============================");
      console.log(user);
      console.log(session);
      console.log("hada hwa ============================");
      session.user.id = 10;
      session.user.role = "student";
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "auto",
  },
  jwt: {
    secret: "sdlkfjsldkfj",

    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
});
