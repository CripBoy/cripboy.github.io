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
        this.anchor = 1;
    }

    update(){};

    draw(context) {
        context.save();
        context.globalAlpha = this.opacity;
        context.fillStyle = 'red';
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

class Constelation extends Sprite {
    constructor(image, x, y) {
        super(image, x, y);
        this.anchor = 0.5;
        this.opacity = 0.4;
        this.time = 0;
    }

    update(delta) {
        this.time += delta;
        this.opacity = Math.sin(this.time * 1) + 1;
    }
}

async function main() {
    const canvas = document.getElementById("banner");
    const context = canvas.getContext("2d");
    const images = {
        background: await loadImage("/images/anim/banner.png"),
        planet_1: await loadImage("/images/anim/planet_one.png"),
        planet_2: await loadImage("/images/anim/planet_two.png"),
        libra: await loadImage("/images/anim/libra.png"),
        scorp: await loadImage("/images/anim/scorp.png"),
    }

    const planet_1 = new Planet(images.planet_1, 60, 50);
    const planet_2 = new Planet(images.planet_2, 279, 24);
    const libra = new Constelation(images.libra, 180, 100);
    const scorp = new Constelation(images.scorp, 580, 100);

    function update(delta) {
        planet_1.update(delta);
        planet_2.update(delta);
        libra.update(delta);
        scorp.update(delta);
    }

    function draw() {
        context.clearRect(0, 0, 721, 113);
        context.drawImage(images.background, 0, 0);

        planet_1.draw(context);
        planet_2.draw(context);
        libra.draw(context);
        scorp.draw(context);
    }

    function loop() {
        const current = Date.now();
        const elapsed = current - start;
        
        start = current;
        delta = elapsed / 1000;

        update(delta);
        draw();
        requestAnimationFrame(loop);
    }

    let start = Date.now();
    let delta = 0;

    function init() {
        context.imageSmoothingEnabled = true;
        loop();
    }

    init();
}

main();