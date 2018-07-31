function startScreen() {
    let td = startTD();
    let tr = startTR();
    createTable(tr, td);
    prepSnake(5);
}

function startTD() {
    let width = window.screen.width * window.devicePixelRatio;
    let qntTD;
    if(width % 2 == 0) {
        qntTD = width/2;
    } else {
        let leftovers = width % 2;
        qntTD = (width - leftovers)/2;
    }
    return qntTD;
}

function startTR() {
    let height = window.screen.height * window.devicePixelRatio;
}

function createTable(numTRs, numTDs) {
    let table = document.getElementById('mainTable');
    for(i = 0; i < numTRs; i++) {
        newTR = document.createElement('tr');
        table.appendChild(newTR);
        for(j = 0; j < numTDs; j++) {
            newTD = document.createElement('td');
            newTD.classList.add('neutral');
            newTR.appendChild(newTD);
        }
    }
}

function prepSnake(size, tr, td) {
    let minTR = tr - size;
    let minTD = td - size;

    let coorX = (Math.floor(Math.random()) * minTR) + size;
    let coorY = (Math.floor(Math.random()) * minTD) + size;

    document.getElementsByTagName('tr')[coorX].getElementsByTagName('td')[coorY].classList.add('food');
    document.getElementsByTagName('tr')[coorX + 1].getElementsByTagName('td')[coorY].classList.add('food');
    document.getElementsByTagName('tr')[coorX + 2].getElementsByTagName('td')[coorY].classList.add('food');
    document.getElementsByTagName('tr')[coorX + 3].getElementsByTagName('td')[coorY].classList.add('food');
    document.getElementsByTagName('tr')[coorX + 4].getElementsByTagName('td')[coorY].classList.add('food');
}
