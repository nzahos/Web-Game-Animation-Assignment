const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/dude-spritesheet-walk.png");
ASSET_MANAGER.queueDownload("./sprites/grass.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;	// Prevents the image from blurring when scaled

	gameEngine.init(ctx);

	gameEngine.addEntity(new Dude(gameEngine));

	gameEngine.start();
});
