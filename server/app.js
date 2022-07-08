import express from "express";
import loginRouter from "./routes/api/login.js";
import signupRouter from "./routes/api/signup.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/auth/login', loginRouter);
app.use('/v1/auth/register', signupRouter);

app.listen(8080, () => {
    console.log(`Server is running on http://localstorage:${PORT}`);
});