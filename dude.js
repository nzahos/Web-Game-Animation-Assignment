// Dude is our main character. He can move up down left and right on the map.
class Dude {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/dude-spritesheet-walk.png"), 0, 0, 48, 55, 4, 0.2);

        this.yOffset = -25; // Offsets the character upwards from the center of the canvas

        // Calculate the middle of the canvas, then adjust by half of the character's width and height
        // to center the character
        this.x = (game.ctx.canvas.width / 2) - (this.animator.width * 1.5 / 2); 
        this.y = (game.ctx.canvas.height / 2) - (this.animator.height * 1.5 / 2) + this.yOffset; 
        this.movementSpeed = 200; // Movement Speed
    };

    update() {
        const delta = this.game.clockTick * this.movementSpeed;

        // Update the world position based on key presses
        if (this.game.keys["w"]) this.game.worldY -= delta;
        if (this.game.keys["s"]) this.game.worldY += delta;
        if (this.game.keys["a"]) this.game.worldX -= delta;
        if (this.game.keys["d"]) this.game.worldX += delta;
    };

    draw(ctx) {
        // Draw character in the center of the canvas
        // Also: Apply yOffset when drawing the character to shift it via the yOffset variable
        this.animator.drawFrame(this.game.clockTick, ctx, 
            ctx.canvas.width / 2 - this.animator.width * 1.5 / 2, 
            ctx.canvas.height / 2 - this.animator.height * 1.5 / 2 + this.yOffset);
    };
};