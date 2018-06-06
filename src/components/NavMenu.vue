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
    height: 50px;
    background-color: #fd2;
    font-size: 35px;
    color: #000000;
    width: 100%;
    display: flex;
    flex-direction: row;

}

    .nav-container > * {
        width: 33.3%;
        text-align: center;
    }
</style>
