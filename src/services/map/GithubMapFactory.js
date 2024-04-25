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
        console.log(repositoryData);
        const repositoryName = repositoryData.data.full_name;

        await this.setMapRepositoryText(repositoryName);
        await this.setMapRepositoryStarsCount(repositoryData?.data?.stargazers_count);
        await this.setMapRepositoryUrl(repositoryData?.data?.html_url || 'https://github.com/workadventure/workadventure');
        await this.setMapOwnerUrl(repositoryData?.data?.owner?.html_url || 'https://github.com/workadventure');
        await this.setMapRepositoriesUrl(repositoryData?.data?.owner);

        return this;
    }
}