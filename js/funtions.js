const nappi = document.getElementById('nappi');
const jokeritaulu = document.getElementById('jokeritaulu').querySelector('tbody');
const laskuri = document.getElementById('laskuri');

let rivit = 0;

nappi.addEventListener('click', arvojokeririvi);

function arvojokeririvi() {
    const rivi = document.createElement('tr');
    
    for (let i = 0; i < 7; i++) {
        const solu = document.createElement('td');
        const randomNumber = Math.floor(Math.random() * 10);
        solu.textContent = randomNumber;
        rivi.appendChild(solu);
    }

    jokeritaulu.appendChild(rivi);

    rivit++;
    laskuri.textContent = `Valmiita rivejä ${rivit}`;
}


