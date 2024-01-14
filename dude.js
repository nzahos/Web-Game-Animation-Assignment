class Dude {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/dude-spritesheet-walk.png"), 0, 0, 48, 55, 4, 0.2);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
};