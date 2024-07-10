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
