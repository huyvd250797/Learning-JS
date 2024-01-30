// Install

//  1. npm init
//  2. npm i json-server
//  3. Create [name].json
//  4. ADD  "start": "json-server --watch [name].json" to run server

        // "scripts": {
        //     "start": "json-server --watch pokemon.json", <<< ADD it

        //     "test": "echo \"Error: no test specified\" && exit 1"
        //   }

//  5. npm start



// API Server (Fake) / Mock API
var pokemonApi = 'http://localhost:3000/pokemons';


// Get API and show data
fetch(pokemonApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(pokemons) {
        console.log(pokemons);
    });


    // CRUD
    //  - Create: Tạo mới       -> POST
    //  - Read: Lấy dữ liệu     -> GET
    //  - Update: Chỉnh sửa     -> PUT / PATCH
    //  - Delete: Xóa           -> DELETE




