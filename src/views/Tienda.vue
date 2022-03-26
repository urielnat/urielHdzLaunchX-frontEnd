<template>
  <div class="about">
    <h1>Pedidos</h1>
    <br>
    <Pedidos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pedidos from '@/components/Pedidos.vue'


export default {
  name: 'Tienda',
  components: {
  Pedidos
    
  }
}
</script>
<style scoped>
  .about{
    padding-top: 5%;
    color: steelblue;
  }
</style>