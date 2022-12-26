const cols = document.querySelectorAll('.col')

function generateRamdomColor (){
    // this function generate a random colors using a RGB system
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#'+color
}


function setRandomColors () {
    cols.forEach(col => {
        const text = col.querySelector
        col.style.background = generateRamdomColor();
    })
}

setRandomColors()

