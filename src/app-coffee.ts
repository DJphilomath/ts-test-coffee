import { register } from "coffee-script";
register();
import * as express from 'express';

const app: express.Application = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hi");
});

export { app };