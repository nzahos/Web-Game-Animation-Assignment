// Dude is our main character. He can move up down left and right on the map.
class Dude {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/dude-spritesheet-walk.png"), 0, 0, 48, 55, 4, 0.2);

        this.yOffset = -25; // Offset from the top of the canvas

        // Calculate the middle of the canvas, then adjust by half of the character's width and height
        // to center the character
        this.x = (game.ctx.canvas.width / 2) - (this.animator.width * 1.5 / 2); 
        this.y = (game.ctx.canvas.height / 2) - (this.animator.height * 1.5 / 2) + this.yOffset; 
        this.movementSpeed = 200; // Movement Speed
    };

    update() {
        const delta = this.game.clockTick * this.movementSpeed;

        // Movement logic based on key presses
        if (this.game.keys["w"]) this.y -= delta;
        if (this.game.keys["s"]) this.y += delta;
        if (this.game.keys["a"]) this.x -= delta;
        if (this.game.keys["d"]) this.x += delta;

        // Additional logic to keep the character within canvas bounds
        this.x = Math.max(0, Math.min(this.x, this.game.ctx.canvas.width - this.animator.width));
        this.y = Math.max(0, Math.min(this.y, this.game.ctx.canvas.height - this.animator.height));
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};