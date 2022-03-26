<template>

<div class="container">
  <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th >Nombre de la persona</th>
                    <th >Correo</th> 
                    <th >Teléfono</th>
                    <th >Tipo pastel</th>
                    <th >Cantidad</th>
                    <th >Comentarios</th>
                    <th >¿Entregado?</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" p in pedidos" :key="p">
                    <td>{{p.nombre}}</td>
                    <td>{{p.email}}</td>
                    <td>{{p.telefono}}</td>
                    <td v-if="p.armar===false">{{p.sabores}}</td> 
                    <td v-else><label> bizcocho de:</label> {{p.bizcocho}} <br>
                      <label>relleno de:</label> {{p.relleno}}<br>
                      <label>cobertura de: </label>{{p.cobertura}}<br>
                      <label> toppings:</label> {{p.toppings}} </td>
                    <td>{{p.cantidad}}</td>
                    <td>{{p.comentarios}}</td>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>


    <h1>Cantidad restante</h1>
<br>
<div class="row justify-content-md-center">
  <div class="col-md-4">
    <table id="almacen" class="table table-striped table-dark " >
      <thead>
            <th>Tipo de pastel</th>
            <th>Cantidad</th>
        </thead>
        <tbody>
        <tr>
            <td>Milky way</td>
            <td>{{$store.state.mk}}</td>
        </tr>
        <tr>
            <td>Moka</td>
            <td>{{$store.state.moka}}</td>
        </tr>
        <tr >
          <td>Nuez con chocolate</td>
            <td>{{$store.state.nc}}</td>
        </tr>
        <tr>
          <td>Tradicional de chocolate</td>
            <td>{{$store.state.tc}}</td>
        </tr>
        <tr>
            <td>Zanahoria</td>
            <td>{{$store.state.zanahoria}}</td>
        </tr>
        <tr>
            <td>Vainilla</td>
            <td>{{$store.state.vainilla}}</td>
        </tr>
        <tr>
            <td>Alemán</td>
            <td>{{$store.state.aleman}}</td>
        </tr>
        <tr>
            <td>Cajeta</td>
            <td>{{$store.state.cajeta}}</td>
        </tr>
        <tr>
            <td>Chesscake de cereza</td>
            <td>{{$store.state.cc}}</td>
        </tr>
        <tr>
            <td>Durazno</td>
            <td>{{$store.state.durazno}}</td>
        </tr>
        </tbody>
      
    </table>
  </div>
</div>




  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</div>




</template>

<script>

export default {
  name: 'Pedidos',
  data(){
    return {pedidos: this.$store.getters.pedidos}
  },
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
td label{
  font-weight: bold;
  padding: 0px;
  border: 0px;
  margin: 0px;
}
</style>
