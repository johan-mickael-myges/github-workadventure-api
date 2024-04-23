/**
 * @TODO use dynamic data instead of static data
 */
import map from '../data/map.js';

import express from "express";

export default class MapRoutes {
  constructor() {
    this._router = express.Router();
    this.setup();
  }

  setup() {
    this._router.get('/', (req, res) => {
      res.send(map);
    });
  }

  get router() {
    return this._router;
  }
}