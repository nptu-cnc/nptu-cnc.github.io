<script>
export default {
    data() {
        return {
            isMenuClick: false
        }
    }
}
</script>
<template>

    <div class="nav-menu" :class="{ active: isMenuClick }" @click="isMenuClick = !isMenuClick">
        <span></span>
        <span></span>
    </div>


</template>
<style scoped>
.nav-menu:hover {
    cursor: pointer;
}

.nav-menu {
    display: block;
    margin-top: auto;
    width: max-content;
    margin-right: 20px;
    padding: 3px;
}

.nav-menu span {
    display: flex;
    width: 30px;
    height: 2px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: aliceblue;
}

.nav-menu span:nth-child(1) {
    margin-left: 15px;
    width: 15px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu span:nth-child(2) {
    width: 15px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu:hover span:nth-child(1) {
    width: 30px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu:hover span:nth-child(2) {
    transform: translateX(15px);
    width: 30px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu.active span {
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: -7px;
    width: 30px;
}

.nav-menu.active span:nth-child(1) {
    transform: rotateZ(45deg) translateY(12px);
    transition: background-color 0.5s ease, margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu.active span:nth-child(2) {
    transform: rotateZ(-45deg) translateY(-12px);
    transition: background-color 0.5s ease, margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu.active:hover span {
    background-color: rgb(179, 179, 179);
    transition: background-color 0.5s ease, margin 0.5s, width 0.5s, transform 0.5s;
}
</style>
