<template>
  <div class="nav2">
    <div class="contenedorLogo">

     <img class="logo" alt="Vue logo" src="../assets/logo2.png">



    </div>
    <div class ="texto">
      <label style="color: aliceblue; text-align: left;">Av. Lazaro cardenas #332 Durango Dgo.</label>
  
      <label style=" color: aliceblue; height: 100%;">Tel. 6181234567</label>

    </div>

  </div>    
</template>

<script>
export default {
  name: 'Pasteleria',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .nav2{
    height: 25%;
    width: 100%;
    background-color: black;
    
    padding: 0%;
  }
  .contenedorLogo{
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo{
    height: 350px;
    width: 350px;


  }
  .texto{
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .texto{
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    padding-left: 5%;
    padding-right: 5%;
    
  }


 
</style>
