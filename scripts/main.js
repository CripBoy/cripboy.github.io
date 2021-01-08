function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject("Image error");
    });
}

class Sprite {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.opacity = 1;
        this.anchor = 0;
    }

    update(){};

    draw(context) {
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(
            this.x - this.anchor * this.image.width,
            this.y - this.anchor * this.image.height);
        context.rotate(this.angle);
        context.translate(
            -this.x - this.anchor * this.image.width,
            -this.y - this.anchor * this.image.height);
        context.drawImage(this.image, this.x, this.y);
        context.restore();
    }
}

class Planet extends Sprite {
    constructor(image, x, y) {
        super(image, x, y);
        this.anchor = 0.5;
        this.rotation_speed = Math.random() * 0.02 + 0.005;
    }

    update() {
        this.angle += this.rotation_speed;
    }
}

class Constellation extends Sprite {
    constructor(image, x, y) {
        super(image, x, y);
        this.anchor = 0.5;
        this.time = 0;
    }

    update(delta) {
        this.time += delta;
        this.opacity = Math.sin(this.time * 1) + 1;
    }
}

async function main() {
    const [pWidth, pHeight] = [721, 113];
    const container = document.querySelector(".banner");
    const canvas = document.getElementById("banner");
    const context = canvas.getContext("2d");
    const images = {
        background: await loadImage("/images/anim/banner.png"),
        planet_1: await loadImage("/images/anim/planet_one.png"),
        planet_2: await loadImage("/images/anim/planet_two.png"),
        libra: await loadImage("/images/anim/libra.png"),
        scorp: await loadImage("/images/anim/scorp.png"),
    }
    const components = [
        new Sprite(images.background, 0, 0),
        new Planet(images.planet_1, 60, 50),
        new Planet(images.planet_2, 279, 24),
        new Constellation(images.libra, 180, 100),
        new Constellation(images.scorp, 580, 100),
    ];

    function update(delta) {
        for(const cop of components)
            cop.update(delta);
    }

    function draw() {
        context.clearRect(0, 0, pWidth, pHeight);

        for(const cop of components)
            cop.draw(context);
    }

    let start = Date.now();
    let delta = 0;

    function loop() {
        const current = Date.now();
        const elapsed = current - start;
        
        start = current;
        delta = elapsed / 1000;

        update(delta);
        draw();
        requestAnimationFrame(loop);
    }

    function sizeSetup() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        const scale = Math.max(
            canvas.width / images.background.width,
            canvas.height / images.background.height);

        context.imageSmoothingEnabled = false;
        context.scale(scale, scale);
    }

    function init() {
        document.body.onresize = sizeSetup;

        sizeSetup();
        loop();
    }

    init();
}

main();