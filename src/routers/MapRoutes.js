/**
 * @TODO use dynamic data instead of static data
 */
import map from '../data/map.js';

export default class MapRoutes {
  constructor(app) {
    this.app = app;
    this.setup();
  }

  setup() {
    this.app.get('/map', (req, res) => {
      res.send(map);
    });
  }
}