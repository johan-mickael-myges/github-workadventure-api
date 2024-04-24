import MapFactory from "./MapFactory.js";
import { RepositoryService } from "../github/index.js";

export default class GithubMapFactory extends MapFactory {
    constructor(url) {
        super();
        this.url = url;
        this.repositoryService = new RepositoryService();
    }

    async factory() {
        const repositoryData = await this.repositoryService.getRepositoryByURL(this.url);
        const repositoryName = repositoryData.data.full_name;

        await this.setMapRepositoryText(repositoryName);
        await this.setMapRepositoryUrl(repositoryData?.data?.html_url || 'https://www.github.com');

        return this;
    }
}