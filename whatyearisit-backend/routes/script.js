fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.value;
    })