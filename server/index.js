const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Router
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

const commentRouter = require("./routes/comments");
app.use("/comments", commentRouter);

const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Listening on 3001");
  });
});
