<template>
    <header>
        <div>
            <div class="logo-container">
                this is logo
            </div>
            <div class="search-bar">
                this is search bar
            </div>
        </div>
        <NavMenu />
    </header>
</template>

<script>
    import NavMenu from "./NavMenu.vue"
    export default {
        components: {
            NavMenu
        }
    }
</script>

<style scoped>
header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    position: fixed;
}

    header > :first-child {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 40%;
        background-color: aqua;
    }

    header > :last-child {
        height: 60%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>
