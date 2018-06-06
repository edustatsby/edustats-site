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

<style>
.nav-container {
    width: 320px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-top: 20px;
}

    .nav-container > * {
        width: 100px;
        background-color: bisque;
        border: 1px solid black;
        text-align: center;
        text-decoration: none;
    }
</style>
