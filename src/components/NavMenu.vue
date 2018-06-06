<template>
    <div class="nav-container">
        <router-link :to="{ name: 'main' }">Main</router-link>
        <router-link :to="{ name: 'stats' }">Stats</router-link>
        <router-link :to="{ name: 'filter' }" >Filter</router-link>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped>
.nav-container {
    /*width: 320px;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-around;*/
    /*align-items: center;*/
    /*margin: auto;*/
    /*margin-top: 20px;*/
    height: 44px;
    background-color: #fd2;
    font-size: 35px;
    color: #000;
    width: 100%;
    display: flex;
    flex-direction: row;

}

    .nav-container > * {
        /*width: 100px;*/
        /*background-color: bisque;*/
        /*border: 1px solid black;*/
        /*text-align: center;*/
        /*text-decoration: none;*/
        width: 33.3%;
        text-align: center;
    }
</style>
