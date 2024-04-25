import defaultJsonMap from '../../data/map.js';

export default class MapFactory {
    constructor() {
        this.map = defaultJsonMap;
        this.layers = [];
        this.repositoryLayer = [];
        this.repositoryLayerObjects = [];
        this.repositoryLayerObjectsText = {};

        this.repositoryText = '';

        this.setup();
    }

    refreshMapData() {
        this.setup();
    }

    setup() {
        this
            .setupLayers()
            .setupRepositoryLayer()
            .setupRepositoryLayerObjects()
            .setupRepositoryLayerObjectsText()
            .setupRepositoryText();
    }

    setupLayers() {
        this.layers = this.map.layers || [];
        return this;
    }

    setupRepositoryLayer() {

        this.repositoryLayer = this.map.layers
            .find(item => item.id === 54).layers
            .find(item => item.id === 78) || [];

        return this;
    }

    /**
     * @TODO currently, we are only using the first object in the repository layer
     */
    setupRepositoryLayerObjects() {
        this.repositoryLayerObjects = this.repositoryLayer.objects[0] || [];
        return this;
    }

    setupRepositoryLayerObjectsText() {
        this.repositoryLayerObjectsText = this.repositoryLayerObjects.text || {};
        return this;
    }

    setupRepositoryText() {
        this.repositoryText = this.repositoryLayerObjectsText.text || '';
        return this;
    }

    async setMapRepositoryText(text) {
        let currentMap = this.map;

        const textRepositoryProperty = currentMap.layers
            .find((item) => item.id === 54)?.layers
            .find((item) => item.id === 78)?.objects
            .find((item) => item.id === 22).text;

        if (textRepositoryProperty) {
            textRepositoryProperty.text = text;

            this.map = currentMap;
            this.setup();
        }

        return this;
    }

    async setMapRepositoryStarsCount(count) {
        let currentMap = this.map;

        const starsRepositoryProperty = currentMap.layers
            .find((item) => item.id === 54)?.layers
            .find((item) => item.id === 78)?.objects
            .find((item) => item.id === 21).text;

        if (starsRepositoryProperty) {
            starsRepositoryProperty.text = '⭐️ ' + (count || 0);

            this.map = currentMap;
            this.setup();
        }

        return this;
    }

    async setMapRepositoryUrl(url) {
        let currentMap = this.map;

        const openWebsiteProperty = currentMap.layers
            .find((item) => item.id === 55)?.layers
            .find((item) => item.id === 65)?.properties
            .find((item) => item.name === 'openWebsite');

        if (openWebsiteProperty) {
            openWebsiteProperty.value = url;

            this.map = currentMap;
            this.setup();
        }

        return this;

    }

    async setMapOwnerUrl(url) {
        let currentMap = this.map;

        const openWebsiteProperty = currentMap.layers
            .find((item) => item.id === 55)?.layers
            .find((item) => item.id === 66)?.properties
            .find((item) => item.name === 'openWebsite');

        if (openWebsiteProperty) {
            openWebsiteProperty.value = url;

            this.map = currentMap;
            this.setup();
        }

        return this;
    }

    async setMapRepositoriesUrl(owner) {
        let currentMap = this.map;

        const openWebsiteProperty = currentMap.layers
            .find((item) => item.id === 55)?.layers
            .find((item) => item.id === 67)?.properties
            .find((item) => item.name === 'openWebsite');

        if (openWebsiteProperty) {
            openWebsiteProperty.value = owner.type === 'User'
                ? owner.html_url + '?tab=repositories'
                : `https://github.com/orgs/${owner.login}/repositories`;

            this.map = currentMap;
            this.setup();
        }

        return this;
    }

    async setMapRepositoryLanguages(languagesData, repositoryService) {
        let currentMap = this.map;

        const languagesRepositoryProperty = currentMap.layers
            .find((item) => item.id === 54)?.layers
            .find((item) => item.id === 78)?.objects
            .find((item) => item.id === 24).text;

        if (languagesRepositoryProperty) {
            languagesRepositoryProperty.text = await repositoryService.formatRepositoryLanguagesData(languagesData);

            this.map = currentMap;
            this.setup();
        }

        return this;
    }

}