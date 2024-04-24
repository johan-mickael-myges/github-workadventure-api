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
        this.repositoryLayer = this.map.layers.find(layer => layer.name === 'Repository');
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

        await currentMap.layers.forEach(layer => {
            if (layer.name === 'Repository') {
                layer.objects[0].text.text = text;
            }
        });

        this.map = currentMap;

        this.setup();

        return this;
    }

}