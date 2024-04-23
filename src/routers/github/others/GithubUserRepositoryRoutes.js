import { RepositoryService } from "../../../services/github/index.js";

import express from "express";
import dotenv from 'dotenv';
dotenv.config();

export default class GithubUserRepositoryRoutes {
    constructor() {
        this._router = express.Router();
        this.repositoryService = new RepositoryService({
            auth: process.env.GHTOOLS_PASSWORD
        });
        this.setup();
    }

    setup() {
        this._router.get("/:username", async (req, res) => {
            try {
                const username = req.params.username || "";
                console.log("Username: ", username);
                if (!username) {
                    res.send([]);
                    console.log("No username provided.");
                    return;
                }
                const repositories = await this.repositoryService.getRepositories({
                    username
                });
                res.send(repositories?.data || []);
            } catch (error) {
                console.log(error);
                res.send([]);
            }
        });
    }

    get router() {
        return this._router;
    }
}