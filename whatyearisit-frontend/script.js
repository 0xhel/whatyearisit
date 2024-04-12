fetch('https://whatyearisit-eazi-jjzaa0nv9-sterben.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    });