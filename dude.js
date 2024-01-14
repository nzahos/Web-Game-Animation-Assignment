class Dude {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/dude-spritesheet-walk.png"), 0, 0, 48, 55, 4, 0.2);

        this.x = 0; // X Position
        this.y = 0; // Y Position
        this.speed = 150; // Movement Speed
    };

    update() {
        this.x += this.game.clockTick * this.speed;
        this.x > 1440 ? this.x = -48 : null; // Resets the X position to the left side of the screen if it goes off the right side
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};