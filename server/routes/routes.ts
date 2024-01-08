import * as express from "express";
import { Express } from "express";
import { getCards, getMockCards } from "../services/superhero_card_services";
import { getRandomNumberFromQueryString } from "../helpers/card_route_parser";

export function initialiseRoutes(app: Express) {
  console.log("🏗️  Setting up routers...");

  addHealthCheck(app);

  addAPIRoutes(app);
}

function addHealthCheck(app: Express) {
  console.log("🛠️  Creating base router...");

  const baseRouter = express.Router();

  baseRouter.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET");
    console.log(`📨 ${req.url}`);
    next();
  });

  console.log("🏠❤️‍🩹  Adding health check route...");
  baseRouter.get("/health", (req, res) => {
    res.status(200).send("👍 Okay! The server is responding! 🙌");
  });

  console.log("🛠️  Applying base router to Express server...");
  app.use("/", baseRouter);
}

// this function adds all the routes we can access by going to /api/[someRoute]
function addAPIRoutes(app: Express) {
  console.log("🛠️  Creating API router...");

  const apiRouter = express.Router();
  apiRouter.use((req, res, next) => {
    // we'll use this router to return specifically JSON
    res.setHeader("Content-Type", "application/json");
    next();
  });

  // this route allows clients to GET cards
  console.log("📨  Adding GET getcards route...");
  apiRouter.get("/cards", async (req, res) => {
    const resultFromQueryString = getRandomNumberFromQueryString(req.query);
    switch (resultFromQueryString._t) {
      case "success":
        const result = JSON.stringify({
          cards: await getCards(resultFromQueryString.num),
        });
        res.status(200).send(result);
        break;
      case "invalid":
        res.status(500).send({ message: "Invalid query" });
        return;
      case "NaN":
        res.status(500).send({ message: "Invalid amount" });
        return;
    }
  });

  // this route allows clients to GET 14 mock cards
  console.log("📨  Adding GET to get 14 mock cards route...");
  apiRouter.get("/mockcards", async (req, res) => {
    const result = JSON.stringify({
      cards: await getMockCards(),
    });
    res.status(200).send(result);
  });

  console.log("🛠️  Applying API router to Express server...");
  app.use("/api", apiRouter);
}
