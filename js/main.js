const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; 
    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("/img/error.gif");
            document.getElementById("pokeId").innerHTML = "Error: 404";
            document.getElementById("pokeType").innerHTML = "";
            document.getElementById("pokeHp").innerHTML = "";
            document.getElementById("pokeAttack").innerHTML = "";
            document.getElementById("pokeDefense").innerHTML = "";
            document.getElementById("pokeWeight").innerHTML = "";
        }else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeHp = data.stats[0].base_stat;
        let pokeAttack = data.stats[1].base_stat;
        let pokeDefense = data.stats[2].base_stat;
        let pokeWeight = data.weight;
        let pokeId = data.id;
        let pokeType = data.types.map((tipo) => tipo.type.name);
        pokeTipo(pokeType);
        pokeNumid(pokeId);
        pokeImage(pokeImg);
        pokeHealtp(pokeHp);
        pokeAtt(pokeAttack);
        pokeDf(pokeDefense);
        pokeWt(pokeWeight);
    });
}
//Funcion para obtener su Id
const pokeNumid = (url) =>{
    document.getElementById("pokeId").innerHTML = url;
}
//Funcion para obtener su tipo y asignar el elemento
const pokeTipo = (url) =>{
    document.getElementById("pokeType").innerHTML = "";
    url.forEach((elemento) => {
        if (elemento.includes("normal")) {
            document.getElementById("pokeType").innerHTML += `<li class="normal">${elemento}</li>`;
        }else if (elemento.includes("fire")){
            document.getElementById("pokeType").innerHTML += `<li class="fire">${elemento}</li>`;
        }else if (elemento.includes("water")){
            document.getElementById("pokeType").innerHTML += `<li class="water">${elemento}</li>`;
        }else if (elemento.includes("grass")){
            document.getElementById("pokeType").innerHTML += `<li class="grass">${elemento}</li>`;
        }else if (elemento.includes("flying")){
            document.getElementById("pokeType").innerHTML += `<li class="flying">${elemento}</li>`;
        }else if (elemento.includes("fighting")){
            document.getElementById("pokeType").innerHTML += `<li class="fighting">${elemento}</li>`;
        }else if (elemento.includes("poison")){
            document.getElementById("pokeType").innerHTML += `<li class="poison">${elemento}</li>`;
        }else if (elemento.includes("electric")){
            document.getElementById("pokeType").innerHTML += `<li class="electric">${elemento}</li>`;
        }else if (elemento.includes("ground")){
            document.getElementById("pokeType").innerHTML += `<li class="ground">${elemento}</li>`;
        }else if (elemento.includes("rock")){
            document.getElementById("pokeType").innerHTML += `<li class="rock">${elemento}</li>`;
        }else if (elemento.includes("psychic")){
            document.getElementById("pokeType").innerHTML += `<li class="psychic">${elemento}</li>`;
        }else if (elemento.includes("ice")){
            document.getElementById("pokeType").innerHTML += `<li class="ice">${elemento}</li>`;
        }else if (elemento.includes("bug")){
            document.getElementById("pokeType").innerHTML += `<li class="bug">${elemento}</li>`;
        }else if (elemento.includes("ghost")){
            document.getElementById("pokeType").innerHTML += `<li class="ghost">${elemento}</li>`;
        }else if (elemento.includes("steel")){
            document.getElementById("pokeType").innerHTML += `<li class="steel">${elemento}</li>`;
        }else if (elemento.includes("dragon")){
            document.getElementById("pokeType").innerHTML += `<li class="dragon">${elemento}</li>`;
        }else if (elemento.includes("dark")){
            document.getElementById("pokeType").innerHTML += `<li class="dark">${elemento}</li>`;
        }else if (elemento.includes("fairy")){
            document.getElementById("pokeType").innerHTML += `<li class="fairy">${elemento}</li>`;
        }else{
            document.getElementById("pokeType").innerHTML += `<li class="fuego">${elemento}</li>`;
        }
    });
}
//Funcion para obtener imagen
const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
//Funcion para obtener vida
const pokeHealtp = (url) =>{
    document.getElementById("pokeHp").innerHTML = url;
}
//Funcion para obtener el ataque
const pokeAtt = (url) =>{
    document.getElementById("pokeAttack").innerHTML = url;
}
//Funcion para obtener la defensea
const pokeDf = (url) =>{
    document.getElementById("pokeDefense").innerHTML = url;
}
//Funcion para obtener el peso
const pokeWt = (url) =>{
    document.getElementById("pokeWeight").innerHTML = url;
}

