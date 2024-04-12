fetch('https://whatyearisit-q6zne4rnn-sterben.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    });