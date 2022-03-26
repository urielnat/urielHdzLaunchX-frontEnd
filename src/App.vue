<template>
 
  <router-view/>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 40px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 15px;
  text-align: center;
}


body {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
h1{
  color: cornflowerblue;

}

.form-control, .form-control:focus{
   box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
   border: rgba(255, 255, 255, 0);
}



</style>
