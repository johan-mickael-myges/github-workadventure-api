import AuthenticationService from "./AuthenticationService.js";
import { defaultHeaders as headers } from "./constants.js";

export default class RepositoryService {
    constructor(options) {
        this.authService = new AuthenticationService(options);
    }

    async getRepositories(options) {
        await this.authService.checkAuthentication();

        const username = options?.username;
        if (!this.authService.isAuthenticated || username) {

            if (username) {
                return await this.getRepositoriesForUser(username);
            }

            throw new Error("You are not authenticated!, please specify a username to get the repositories for.");
        }

        return await this.authService.octokit.request("GET /user/repos", {
            headers
        });
    }

    async getRepositoriesForUser(username) {
        return await this.authService.octokit.request("GET /users/{username}/repos", {
            username,
            headers
        });
    }
}