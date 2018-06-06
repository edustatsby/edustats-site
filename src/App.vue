<template>
    <div>
        <Header />
        <NavMenu />
        <router-view />
    </div>
</template>

<script>
import {router} from './main.js';
import Header from './components/Header.vue';
import NavMenu from './components/NavMenu.vue';

export default {
    components: {
        Header,
        NavMenu,
    },
  name: 'app',
    beforeUpdate(){
        console.log(this.$store.state);
    },
    data () {
      return {
          userInput: '',
      }
    },
  methods: {
      redirect(url) {
          router.push(url);
      },
      changeUserName() {
          this.$store.commit('changeUserName', this.userInput);
      }
  }
}
</script>

<style>
    body{
        margin: 0px;
    }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    padding: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
