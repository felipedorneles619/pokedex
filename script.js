const searchInput = document.getElementById('search-input');
const pokemonName = document.getElementById('pokemon-name');
const pokemonImage = document.getElementById('pokemon-image');
const pokemonTypes = document.getElementById('pokemon-types');

function searchPokemon() {
    const searchTerm = searchInput.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            pokemonName.innerText = data.name;
            pokemonImage.src = data.sprites.front_default;
            const types = data.types.map((type) => type.type.name);
            pokemonTypes.innerText = `Types: ${types.join(', ')}`;
        })
        .catch((error) => {
            pokemonName.innerText = 'Não encontrado';
            pokemonImage.src = '';
            pokemonTypes.innerText = '';
        });
}
