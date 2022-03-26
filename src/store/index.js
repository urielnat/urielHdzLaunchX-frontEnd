import { createStore } from 'vuex'

export default createStore({
  state: {
    pedidos: [], 
    mk:10,
    moka:10,
    nc:10,
    tc:10,
    zanahoria:10,
    vainilla:10,
    aleman:10,
    cajeta:10,
    cc:10,
    durazno:10
    
  },
  getters: {
    pedidos(state){
      return state.pedidos;
    },
    armar(state){
      return state.armar
    }
  },
  mutations: {
    guardarPedido(state,pedido){
      state.pedidos.push(pedido) ;
    },
    actualizarCantidad(state,{tipoPastel,cantidad}){
      
      switch (tipoPastel){
        case 'Milky way':
          state.mk -=cantidad;   
          break;
        case 'Moka':
          state.moka -=cantidad;   
          break;  
        case 'Nuez con chocolate':
          state.nc -=cantidad;   
          break;  
        case 'Tradicional de chocolate':
          state.tc -=cantidad;   
          break;
        case 'Zanahoria':
          state.zanahoria -=cantidad;   
          break;  
        case 'Vainilla':
          state.vainilla -=cantidad;   
          break;
        case 'Alemán':
          state.aleman -=cantidad;   
          break;
        case 'Cajeta':
          state.cajeta -=cantidad;   
          break;    
        case 'Chesscake de cereza':
          state.cc -=cantidad;   
          break;   
        case 'Durazno':
          state.durazno -=cantidad;   
          break;           
           
      } 

    }

  },
  actions: {
   
  },
  modules: {
  }
})
