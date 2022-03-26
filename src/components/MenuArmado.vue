<template>
        <div class="contenedor">
             <h1>Arma tu pastel</h1>

            <table class="table table-striped table-dark" >
             <tbody>
            
              <tr>
                  <td style="border: 1px solid black;"><h4>Bizcochos</h4> 
                      <ul>
                          <li>Vainilla</li>
                          <li>Chocolate</li>
                          <li>Marmoleado</li>
                          <li>Naranja</li>
                          <li>Red Velvet</li>
                          <li>Almendra</li>
                          <li>Limón</li>
                      </ul>
                  </td>
                  <td style="border: 1px solid black;"><h4>Rellenos</h4> 
                      <ul>
                          <li>Mermeladas</li>
                          <ul>
                              <li>Fresa</li>
                              <li>Durazno</li>
                              <li>Guayaba</li>
                              <li>Frambuesa</li>
                          </ul>
                          <li>Cremas</li>
                          <ul>
                              <li>Fresa</li>
                              <li>Durazno</li>
                              <li>Café</li>
                              <li>Vainilla</li>
                          </ul>
                      
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td style="border: 1px solid black;"><h4>Coberturas</h4> 
                  <ul>
                      <li>Betún de nata</li>
                      <li>Betún Chocolate</li>
                      <li>Betún Vainilla</li>
                      <li>Buttercream</li>
                      <li>Queso crema</li>
                  </ul>
                  </td>
                  <td style="border: 1px solid black;"><h4>Toppings</h4> 
                  <ul>
                      <li>Brownies</li>
                      <li>cobertura pastel imposible</li>
                      <li>Fruta de temporada</li>
                      <li>Ganage</li>
                      <li>Nutella</li>
                      <li>Cream carlota</li>
                      </ul>
              </td>
              </tr>
             </tbody> 
            </table>
              <!-- <router-link to='/pedido/true'> -->
                <button class="btn btn-outline-primary" @click="ruta()" >Realizar pedido</button>
            <!-- </router-link> -->

        </div> 
</template>

<script>
export default {
  name: 'MenuArmado',
  props: {
    msg: String
  },
   methods: {
    ruta: function () {
       this.$router.push({ name: 'pedido', params: { armarPastel: true } });
     
    }
  }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
} */

li{
  text-align: start;
}


.contenedor{
  position: relative;
  width: 40%;
}

.menu{
  border: 1px solid black; 
  border-collapse: collapse;
  height: 50%;
  width: 100%;

}
</style>
