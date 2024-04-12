fetch('https://whatyearisit-2wdmqyspl-sterben.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    });