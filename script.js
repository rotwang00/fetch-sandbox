document.getElementById('getText').addEventListener('click', getText);

function getText() {
  // Using standard functions
  // fetch('sample.txt')
  //   .then(function (res) {
  //     return res.text();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });

  // Using arrow functions
  fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').textContent = data;
    })
    .catch(err => console.log(err));
}

document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers() {
  fetch('users.json')
    .then(res => res.json())
    .then(data => {
      let output = '<h2 class="mb-4">Users</h2>';
      data.forEach(function (user) {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>
          `;
      });
      document.getElementById('output').innerHTML = output;
    });
}

document.getElementById('getPosts').addEventListener('click', getPosts);

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      let output = '<h2 class="mb-4">Posts</h2>';
      data.forEach(function (post) {
        output += `
          <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    });
}

document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then(res => res.json())
    .then(data => console.log(data));
}
