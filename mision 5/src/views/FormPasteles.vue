<template>

<div class="container panel">

      <h2>Realiza tu pedido de pastel </h2>
      <br>

      
    <form id="formulario" ref="form" >
      
      <div class="row">

        <div class="col-md-6">
              <legend>Información personal:</legend>
        <div class="form-row">
            <div class="form-group col-md-9">
              <label for="fNombre">Nombre:</label>
              <input class="form-control" required type="text" id="fNombre" v-model="pedido.nombre"  name="fNombre" >
            </div>
            <div class="form-group col-md-9">
              <label for="Telefono">Teléfono:</label>
              <input class="form-control" required type="text"  id="Telefono" v-model="pedido.telefono" name="Telefono" >
            </div>
        </div>


          <div class="form-row">
            <div class="form-group col-md-9">
              <label for="email">Correo electrónico:</label><br>
              <input required class="form-control" type="email" id="email" v-model="pedido.email" name="email" >
            </div>
            <div class="form-group col-md-9">
            <label for="comentarios">Comentarios:</label><br>
            <textarea  class="form-control" type="comentarios" id="comentarios" name="comentarios" v-model="pedido.comentarios" ></textarea>
            </div>
        </div>

        </div>



        <div class="col-md-6">


            <!------------------------- pastel de la tienda----------------------------------->
            <div v-if="!armarPastel">

              <fieldset>
                <legend>Pastel:</legend>
                    
                  <div class="form-row">
                    
                    <div class="form-group col-md-6">
                      <label for="DropDownPastel">Tipo pastel:</label><br>
                      <select class="form-control" @change="validarRestante($event.target.value)" required ID="DropDownPastel" v-model="pedido.sabores">
                          <option disabled value="">Seleccione un sabor</option>
                          <option :disabled="1>$store.state.mk" Value="Milky way">Milky way</option>
                          <option :disabled="1>$store.state.moka" Value="Moka">Moka</option>
                          <option :disabled="1>$store.state.nc" Value="Nuez con chocolate">Nuez con chocolate</option>
                          <option :disabled="1>$store.state.tc" Value="Tradicional de chocolate">Tradicional de chocolate</option>
                          <option :disabled="1>$store.state.zanahoria" Value="Zanahoria">Zanahoria</option>
                          <option :disabled="1>$store.state.vainilla" Value="Vainilla">Vainilla</option>
                          <option :disabled="1>$store.state.aleman" Value="Alemán">Alemán</option>
                          <option :disabled="1>$store.state.cajeta" Value="Cajeta">Cajeta</option>
                          <option :disabled="1>$store.state.cc" Value="Chesscake de cereza">Chesscake de cereza</option>
                          <option :disabled="1>$store.state.durazno" Value="Durazno">Durazno</option>
                      </select>
                  </div>


                    <div class="form-group col-md-1">
                      <label for="DropDownCantidad">Cantidad:</label>
                      <select class="form-control" required ID="DropDownCantidad" v-model="pedido.cantidad" Height="18px" Width="187px">
                          <option :disabled="1>restante" Value="1">1</option>
                          <option :disabled="2>restante" Value="2">2</option>
                          <option :disabled="3>restante"  Value="3">3</option>
                          <option :disabled="4>restante"  Value="4">4</option>
                          <option :disabled="5>restante"  Value="5">5</option>
                          <option :disabled="6>restante"  Value="6">6</option>
                          <option :disabled="7>restante"  Value="7">7</option>
                          <option :disabled="8>restante"  Value="8">8</option>
                          <option :disabled="9>restante"  Value="9">9</option>
                          <option :disabled="10>restante" Value="10">10</option>
                      </select>
                      </div>
                  </div>
              </fieldset>
            </div>


            <!------------------------- armado de pastel----------------------------------->
            <div v-if="armarPastel">

            <fieldset>
                <legend>Bizcochos:</legend>
                  <input required class="form-check-input" type="radio" id="Vainilla" name="bizcocho" v-model="pedido.bizcocho" value="Vainilla">
                  <label for="Vainilla">Vainilla</label><br>
                  <input class="form-check-input" type="radio" id="Chocolate" name="bizcocho" v-model="pedido.bizcocho" value="Chocolate">
                  <label for="Chocolate">Chocolate</label><br>
                  <input class="form-check-input" type="radio" id="Marmoleado" name="bizcocho" v-model="pedido.bizcocho" value="Marmoleado">
                  <label for="Marmoleado">Marmoleado</label><br>
                  <input class="form-check-input" type="radio" id="Naranja" name="bizcocho" v-model="pedido.bizcocho" value="Naranja">
                  <label for="Naranja">Naranja</label><br>
                  <input class="form-check-input" type="radio" id="Red Velvet" name="bizcocho" v-model="pedido.bizcocho" value="Red Velvet">
                  <label for="Red Velvet">Red Velvet</label><br>
                  <input class="form-check-input" type="radio" id="Almendra" name="bizcocho" v-model="pedido.bizcocho" value="Almendra">
                  <label for="Almendra">Almendra</label><br>
                  <input class="form-check-input" type="radio" id="Limon" name="bizcocho" v-model="pedido.bizcocho" value="Limon">
                  <label for="Limon">Limón</label><br>
              </fieldset>


              <fieldset>
                <legend>Rellenos:</legend>
                <div class="form-group col-md-6">
                  <label for="relleno">Elige el relleno:</label>
                  <select class="form-control" name="relleno" v-model="pedido.relleno" id="relleno">
                    <option disabled value="">Seleccione un relleno</option>
                    <optgroup label="Mermeladas">
                      <option value="Mermelada de Fresa" >Fresa</option>
                      <option value="Mermelada de Durazno">Durazno</option>
                      <option value="Mermelada de Guayaba">Guayaba</option>
                      <option value="Mermelada de Frambuesa">Frambuesa</option>
                    </optgroup>
                    <optgroup label="Cremas">
                      <option value="Crema de Fresa" >Fresa</option>
                      <option value="Crema de Durazno">Durazno</option>
                      <option value="Crema de Café">Café</option>
                      <option value="Crema de Vainilla">Vainilla</option>
                    </optgroup>
                  </select>    
                </div>  

              </fieldset>
              <fieldset>
                <legend>Coberturas y toppings:</legend>
                  <div class="form-group col-md-6">
                    <label for="cobertura">Elige la cobertura:</label>
                    <select class="form-control" name="cobertura" id="cobertura" v-model="pedido.cobertura">
                        <option disabled value="">Seleccione un betún</option>
                        <option value="Betún de nata" >Betún de nata</option>
                        <option value="Betún de chocolate">Betún de chocolate</option>
                        <option value="Betún de vainilla">Betún de vainilla</option>
                        <option value="Buttercream">Buttercream</option>
                        <option value="Queso crema">Queso crema</option>
                    </select> 
                </div>
                <label >Elige los toppings:</label><br>
                <input class="form-check-input" type="checkbox" id="Brownies" name="Brownies" v-model="pedido.toppings" value="Brownies">
                <label for="Brownies"> Brownies</label><br>
                <input class="form-check-input" type="checkbox" id="cobertura_pastel" name="cobertura_pastel" v-model="pedido.toppings" value="Pastel Imposible">
                <label for="cobertura_pastel">cobertura pastel imposible</label><br>
                <input class="form-check-input" type="checkbox" id="Fruta" name="Fruta" v-model="pedido.toppings" value="Fruta">
                <label for="Fruta">Fruta de temporada</label><br>
                <input class="form-check-input" type="checkbox" id="Ganage" name="Ganage" v-model="pedido.toppings" value="Ganage">
                <label for="Ganage"> Ganage</label><br>
                <input class="form-check-input" type="checkbox" id="Nutella" name="Nutella" v-model="pedido.toppings" value="Nutella">
                <label for="Nutella"> Nutella</label><br>
                <input class="form-check-input" type="checkbox" id="CreamCarlota" name="CreamCarlota" v-model="pedido.toppings" value="Cream Carlota">
                <label for="CreamCarlota"> Cream Carlota</label><br>
              </fieldset>
            </div>

        </div>
        
      </div>





  
  <br>

  </form>
  <button class="btn btn-primary"  @click="guardarPedido()">Realizar pedido</button>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</div>

</template>

<script>
export default {
  name: 'FormPasteles',
  props: {armarPastel:Boolean},

  data() {
            // armar: this.$route.params.armarPastel,
       return{pedido:{
              nombre: '',
              comentarios: '',
              email: '',
              telefono: '',
              sabores: '',
              cantidad: 1,
              bizcocho: '',
              relleno: '',
              cobertura:'',
              toppings: [],
              armar:this.armarPastel
            },
             restante:0
            }
    },
  methods: {
  
    guardarPedido(){
       

      this.$store.commit("guardarPedido",this.pedido);
     

      if(!this.armarPastel){
         const tipoPastel = this.pedido.sabores;
         const cantidad = +this.pedido.cantidad;
        this.$store.commit('actualizarCantidad',{tipoPastel,cantidad})
      }
      this.$refs.form.reset();
      this.$router.push({ path: '/' });
    },
    validarRestante(tipoPastel){
    

         switch (tipoPastel){
        case 'Milky way':
          this.restante =this.$store.state.mk;   
          break;
        case 'Moka':
          this.restante =this.$store.state.moka;   
          break;  
        case 'Nuez con chocolate':
          this.restante =this.$store.state.nc;   
          break;  
        case 'Tradicional de chocolate':
          this.restante =this.$store.state.tc;   
          break;
        case 'Zanahoria':
          this.restante =this.$store.state.zanahoria;   
          break;  
        case 'Vainilla':
          this.restante =this.$store.state.vainilla;   
          break;
        case 'Alemán':
          this.restante =this.$store.state.aleman;   
          break;
        case 'Cajeta':
          this.restante =this.$store.state.cajeta;   
          break;    
        case 'Chesscake de cereza':
          this.restante =this.$store.state.cc;   
          break;   
        case 'Durazno':
          this.restante =this.$store.state.durazno;   
          break;           
        default:
          this.restante =10;   
      }
    }
  },
  created(){
    this.validarRestante();
  }

   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#formulario{
  text-align: left;

}
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
.panel{
  padding:5% 10% 0% 10%;
  color: cornflowerblue;

}

legend{
  font-weight: bold;
}

.form-control{
  background-color: #4b5574  !important;
  opacity: 80%;
  
}
input, select, textarea{
    color: white;
}


textarea:focus, input:focus {
    color: white;
}

</style>
