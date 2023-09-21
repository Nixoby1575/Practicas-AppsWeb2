
const { get } = require('../plugins/httpClient');

async function getPokemon(idPokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;

  try {
    const response = await get(url);
    const pokemon = {
      Nombre: response.name,
      Tipos: response.types.map((tipo) => tipo.type.name),
      Habilidades: response.abilities.map((habilidad) => habilidad.ability.name),
    };
    return pokemon;
  } catch (error) {
    throw new Error(`Error al obtener datos del Pokémon: ${error.message}`);
  }
}

module.exports = { getPokemon };