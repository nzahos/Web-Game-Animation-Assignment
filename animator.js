class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration }); // Copy the parameters into the object

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime; // Loops the animation
        const frame = this.currentFrame();

        ctx.drawImage(this.spritesheet,
            this.xStart + (this.width * frame), this.yStart, // Source X and Y
            this.width, this.height, // Source width and height
            x, y, // Destination X and Y
            this.width * 1.5, this.height * 1.5); // Destination width and height (Multiply to scale the image)
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};