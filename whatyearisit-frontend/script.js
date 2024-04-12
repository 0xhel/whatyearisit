fetch('whatyearisit-45m8mqna2-sterben.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    });