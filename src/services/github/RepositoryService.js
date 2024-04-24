import AuthenticationService from "./AuthenticationService.js";
import { defaultHeaders as headers } from "./constants.js";
import GitUrlParse from 'git-url-parse';

export default class RepositoryService {
    constructor(options) {
        this.authService = new AuthenticationService(options);
    }

    async getRepositories(options) {
        // Authentication disabled for now
        // await this.authService.checkAuthentication();

        const username = options?.username;
        if (!this.authService.isAuthenticated || username) {

            if (username) {
                return await this.getRepositoriesForUser(username);
            }
        }

        throw new Error("You are not authenticated!, please specify a username to get the repositories for.");
        // return await this.authService.octokit.request("GET /user/repos", {
        //     headers
        // });
    }

    async getRepositoriesForUser(username) {
        return await this.authService.octokit.request("GET /users/{username}/repos", {
            username,
            headers
        });
    }

    async getRepositoryByURL(url) {
        const gitUrl = GitUrlParse(url);
        return await this.authService.octokit.request("GET /repos/{owner}/{repo}", {
            owner: gitUrl.owner,
            repo: gitUrl.name,
            headers
        });
    }
}