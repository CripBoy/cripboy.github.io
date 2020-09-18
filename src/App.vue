<template>
    <div id="app" class="relative">
        <div class="app-inner">
            <div class="navbar">
                <div class="brand">
                    <img src="./assets/brand-name.png">
                </div>
                <div class="lang-menu">
                    <div class="select">
                        <div class="lang-flag">
                            <img src="./assets/BR-flag.png">
                        </div>
                        <div class="lang-name"><h4><span>Português</span></h4></div>
                        <div class="select-arrow">
                            <img src="./assets/arrow-down.png">
                        </div>
                    </div>
                    <div class="hidden-select">
                        <div class="country-flag">
                            <img src="./assets/BR-flag.png">
                        </div>
                        <div class="country-flag">
                            <img src="./assets/EU-flag.png">
                        </div>
                    </div>
                </div>
            </div>

            <content class="page-content">
                <div class="action-cards">
                    <div class="action-cards-container flex">
                        <div class="action-card">
                            <h2><span>Projects</span></h2>
                            <div class="card-border">
                                <div class="icon-stuff centered">
                                    <img src="./assets/icon-socks.png">
                                </div>
                            </div>
                        </div>
                        <div class="action-card">
                            <h2><span>Opensource</span></h2>
                            <div class="card-border">
                                <div class="icon-stuff centered">
                                    <img src="./assets/icon-bottle.png">
                                </div>
                            </div>
                        </div>
                        <div class="action-card">
                            <h2><span>About me</span></h2>
                            <div class="card-border">
                                <div class="icon-stuff centered">
                                    <img src="./assets/icon-shirt.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="call-to-action">
                            <img src="./assets/arrow-curved.png">
                        </div>

                        <div class="contact">
                            <a href="#"><h3><span>Contact me</span></h3></a>
                        </div>
                    </div>
                </div>
            </content>

            <div class="left-decoration">
                <img src="./assets/objects-left.png">
            </div>
            <div class="right-decoration">
                <img src="./assets/objects-right.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World'
            }
        }
    }
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
body {
    font-family: 'Indie Flower', cursive;
    color: #474645;
}
img {
    width: 100%;
}
h1 {
    font-size: 30px;
}
h2 {
    font-size: 32px;
}
h3 {
    font-size: 25px;
}
h4 {
    font-size: 20px;
}
a {
    color: #7b834e;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.centered {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#app {
    background-image: url("./assets/background.png");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.app-inner {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
}
.navbar {
    display: flex;
    justify-content: space-between;
    margin: 10px;
}
.brand {
    width: 130px;
}
.lang-menu .select {
    display: flex;
    margin: 15px 0 0 0;
    cursor: pointer;
}
.lang-menu .select * {
    margin: 0 5px;
}
.lang-menu .select .lang-flag {
    width: 30px;
}
.lang-menu .select .select-arrow {
    width: 10px;
}
.lang-menu .hidden-select {
    display: none;
}
.page-content {
    /*padding: 100px 0 0 0;*/
}
.action-cards {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.action-card {

}
.card-border {
    width: 190px;
    height: 230px;
    padding: 10px;
    margin: 20px;
    border: 4px dashed #737373;
    border-radius: 10px;
    position: relative;
}
.icon-stuff {
    width: 130px;
    margin: auto;
    position: absolute;
}
.call-to-action {
    width: 150px;
    position: absolute;
    bottom: -100px;
    right: 40px;
}
.contact {
    transform: translateY(100px);
}
.left-decoration {
    width: 200px;
    position: absolute;
    bottom: 0;
    left: 30px;
}
.right-decoration {
    width: 300px;
    position: absolute;
    bottom: 0;
    right: 30px;
}
</style>