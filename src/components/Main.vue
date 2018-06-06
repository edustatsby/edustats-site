<template>
    <div class="main-container">
        <h1></h1>
        <Inscription />
    </div>
</template>

<script>
    import Inscription from "./MainComponents/Inscription.vue"
    export default {
        components: {
            Inscription
        }
    }
</script>

<style scoped>
.main-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 750px;
    background-color: #ffffff;
}
</style>
