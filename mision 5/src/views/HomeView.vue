<template>
  <div class="home">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Pasteleria/>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #192a3d ">

    

      <form class="form-inline">
        <button class="btn btn-outline-primary" type="button"><router-link class="router" to="/">Cliente</router-link></button>
        <button class="btn btn-sm btn-primary" type="button"> <router-link class="router" to="/Tienda">Tienda</router-link></button>
      </form>
   </nav>

    <div class="menus" >
      <Menu />
      <MenuArmado/>
    </div>

    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'
import Pasteleria from '@/components/Pasteleria.vue'
import MenuArmado from '../components/MenuArmado.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Menu,
    Pasteleria,
    MenuArmado
  }
}
</script>

<style scoped>
  .menus{
    display: flex;
    justify-content: space-evenly;
    align-content: center !important;
  }
  .router{
    color: whitesmoke;
  }
  
 
</style>
