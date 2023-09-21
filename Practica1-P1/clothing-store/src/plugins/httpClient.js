
const request = require('superagent');

async function get(url) {
  try {
    const response = await request.get(url);
    if (response.status === 200) {
      return response.body;
    } else {
      throw new Error(`Error en la solicitud a la PokéAPI: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error en la solicitud a la PokéAPI: ${error.message}`);
  }
}

module.exports = { get };
