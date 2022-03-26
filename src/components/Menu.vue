<template>
   <div>
             <h1>Nuestros pasteles</h1>
             <table  class="table table-striped table-dark">
               <tbody>
                   <tr>
                      <td>Milky way................................</td>
                      <td>$350.00</td>
                  </tr>
                  <tr>
                      <td>Moka.....................................</td>
                      <td>$330.00</td>
                  </tr>  
                  <tr>
                      <td>Nuez con chocolate.......................</td>
                      <td>$320.00</td>
                  </tr>

                   <tr>
                      <td>Tradicional de chocolate.................</td>
                      <td>$295.00</td>
                  </tr>
                  
                  <tr>
                      <td>Zanahoria................................</td>
                      <td>$250.00</td>
                  </tr>
                
                  <tr>
                      <td>Vainilla.................................</td>
                      <td>$330.00</td>
                  </tr>
                  
                  <tr>
                      <td>Alemán...................................</td>
                      <td>$320.00</td>
                  </tr>

                  <tr>
                      <td>Cajeta...................................</td>
                      <td>$330.00</td>
                  </tr>

                  <tr>
                      <td>Chesscake de cereza......................</td>
                      <td>$250.00</td>
                  </tr>

                  <tr>
                      <td>Durazno..................................</td>
                      <td>$330.00</td>
                  </tr>
                      
               </tbody>
            
              </table>
              <router-link to="/pedido/false">
                <button  class="btn btn-outline-primary">Realizar pedido</button>
            </router-link>
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

         </div>   
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
