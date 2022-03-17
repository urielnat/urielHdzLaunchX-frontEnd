


   
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");

     const pokePhoto = document.getElementById("pokeImg");



    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    pokeImage("");
    loader(true);
    fetch(url).then((res) => {
        loader(false);
        
        pokePhoto.classList.add("active")

        if (res.status != "200") {
            pokeImage("./img/404.png");
            const canvas = document.getElementById("myChart");
            const context =  canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

        }
        else {
            return res.json();
        }
    }
    ).then((data) => {
        if ( data &&data.sprites) {
            console.log(data.sprites.front_default);
            let pokeImg = data.sprites.other.home.front_default;

            let  values =  data.stats.map((entry)=> { return entry.base_stat; });
            let  labels =  data.stats.map((entry)=> { return entry.stat; }).map((stat)=> {return stat.name;});
            let  types =   data.types.map((entry)=> { return entry.type; }).map((type)=> {return type.name;});
            document.getElementById("t3").innerHTML = "Altura: "+(data.height/10) +"m";
            document.getElementById("t4").innerHTML = "Peso: "+(data.weight/10) +"Kg";

            pokeImage(pokeImg);
            drawChart(labels,values);
            type(types);
        }else{
            pokeImage("./img/pikachu.gif");

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


const drawChart = (labels,values)=>{


    var xValues = labels;
    var yValues = values;
    
    var barColors = ["red", "green","blue","orange","brown","purple"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Stats"
        },
        scales: {
          xAxes: [{ticks: {min: 0, max:200}}]
        }
      }
    });

}

const loader = (show)=>{

  const loader=  document.getElementById("loader");
  show?loader.classList.add("active"):loader.classList.remove("active");

  const pokePhoto = document.getElementById("pokeImg");
  show?pokePhoto.classList.remove("active"):null


}

function type(types){

    document.getElementById("titulo").innerHTML="Tipo(s)";
    document.getElementById("t1").innerHTML = types[0];
    if(types.length>1)
         document.getElementById("t2").innerHTML = types[1];
    else     
        document.getElementById("t2").innerHTML = "";

}