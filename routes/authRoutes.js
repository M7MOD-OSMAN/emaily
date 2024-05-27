import express from "express";
import passport from "passport";

const app = express();

export const authRoutes = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  console.log(process.env.PORT);
};
