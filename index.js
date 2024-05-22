import express from "express";
import { Passport } from "passport";
import GoogleStrategy from "passport-google-oauth20";

const app = express();

console.log(process.env.x);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
