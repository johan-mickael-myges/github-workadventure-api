import MapRoutes from "./MapRoutes.js";

export default function (app) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  new MapRoutes(app);
  // Add new routes here
}