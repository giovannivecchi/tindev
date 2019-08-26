const express = require("express");
const routes = express.Router();
const devController = require("./controllers/devController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/dislikesController");


routes.get("/", (req, res) => {
  return res.json({ message: `Inicializado na porta 3000`, status: `Ok` });
});

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);
routes.post("devs/:Id/likes", LikeController.store);
routes.post("devs/:Id/dislikes", DislikeController.store);

module.exports = routes;
