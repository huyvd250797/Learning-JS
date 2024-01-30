// API (URL): Cổng giao tiếp của các Phần mềm

// Backend -> API -> Fetch -> JSON 
// -> JSON.parse -> Javascript types// -> Render ra giao diện vs HTML


var postApi = 'https://jsonplaceholder.typicode.com/posts'

// stream
// fetch(postApi)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: JSON -> Javascipt
//     })
//     .then(function(postes) {
//         console.log(postes);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascipt
    })
    .then(function(postes) {
        var htmls = postes.map(function(post) {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        alert('Có lỗi');
    })



//  JSON SERVER: FAKE API Server