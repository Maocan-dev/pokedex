const fetchPokemon = () => {
  const pokeNombre = document.getElementById("pokeNombre");
  let pokeDato = pokeNombre.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeDato}`;

  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        pokeImg("./assets/error3.gif");
      } else {
        return res.json();
      }
    })
    .then((datos) => {
      console.log(datos);
      /* IMAGEN */
      let pokeImagen = datos.sprites.other.dream_world.front_default;
      pokeImg(pokeImagen);
      /* ID */
      let pokeIdx = datos.id;
      pokeId(pokeIdx);
      /* TIPO */
      let tipos = [];
      let tipo = datos.types;
      tipo.forEach(function (tip) {
        tipos.push(tip.type.name);
      });
      let tiposString = JSON.stringify(tipos);
      pokeTipo(tiposString);
      /* HABILIDADES */
      let habilidades = [];
      let habilidad = datos.abilities;
      habilidad.forEach(function (hab) {
        habilidades.push(hab.ability.name);
      });
      let habilidadesString = JSON.stringify(habilidades);
      pokeHab(habilidadesString);
      /* STATS */
      let hpx = datos.stats[0].base_stat;
      pokeHp(hpx);
      let attx = datos.stats[1].base_stat;
      pokeAttack(attx);
      let def = datos.stats[2].base_stat;
      pokeDef(def);
      /* CARACTERISTICAS */
      let height = datos.height;
      pokeSize(height);
      let weight = datos.weight;
      pokePeso(weight);
    });
};

//fetchPokemon();
/* DOM */
const pokeImg = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

const pokeId = (id) => {
  const pokeId = document.getElementById("pokeId");
  pokeId.innerHTML = id;
  idx.innerHTML = "poke Id";
};

const pokeTipo = (dato) => {
  const pokeTipo = document.getElementById("pokeTipo", "tipx");
  pokeTipo.innerHTML = dato;
  tipx.innerHTML = "Tipo";
};
const pokeHab = (habilidad) => {
  const pokeHab = document.getElementById("pokeHab", "habil");
  pokeHab.innerHTML = habilidad;
  habil.innerHTML = "Habilidades";
};
const pokeHp = (vida) => {
  const pokeHp = document.getElementById("pokeHp", "hpx");
  pokeHp.innerHTML = vida;
  hpx.innerHTML = "Vida";
};
const pokeAttack = (ataque) => {
  const pokeAttack = document.getElementById("pokeAttack");
  pokeAttack.innerHTML = ataque;
  ataqx.innerHTML = "Ataque";
};
const pokeDef = (defensa) => {
  const pokeDef = document.getElementById("pokeDef");
  pokeDef.innerHTML = defensa;
  defenx.innerHTML = "Defensa";
};
const pokeSize = (tamaño) => {
  const pokeSize = document.getElementById("pokeTam");
  pokeSize.innerHTML = tamaño * 10 + " cms";
  tamx.innerHTML = "Altura";
};
const pokePeso = (peso) => {
  const pokePeso = document.getElementById("pokePeso");
  pokePeso.innerHTML = peso / 10 + " Kgs";
  pesox.innerHTML = "Peso";
};
