fetch('https://whatyearisit-umber.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = year;
    })