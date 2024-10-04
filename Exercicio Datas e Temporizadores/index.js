function timeToDate(futureDate) {
    const now = new Date().getTime()
    const diffdate = futureDate - now;

    const secOfMin = 60 * 1000;
    const secOfHour = 60 * secOfMin;
    const secOfDay = 24 * secOfHour;

    const days = Math.floor(diffdate / secOfDay);
    const hours = Math.floor((diffdate % secOfDay) / secOfHour);
    const minutes = Math.floor((diffdate % secOfHour) / secOfMin);
    const seconds = Math.floor((diffdate % secOfMin) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

const loadTemp = () => {
    const futureDate = new Date('2024-12-30T12:23:59').getTime()
    const time = timeToDate(futureDate)
    const boxes = document.getElementsByClassName('box')

    boxes[0].querySelector('h3').innerText = `Dias`;
    boxes[1].querySelector('h3').innerText = `Horas`;
    boxes[2].querySelector('h3').innerText = `Minutos`;
    boxes[3].querySelector('h3').innerText = `Segundos`;

    document.getElementById('dias').innerText = time.days;
    document.getElementById('horas').innerText = time.hours;
    document.getElementById('minutos').innerText = time.minutes;
    document.getElementById('segundos').innerText = time.seconds;
}

const loadLoop = setInterval(loadTemp, 1000)

loadTemp()




// TESTE ANTERIORES *********************************

// function futureDay(year, month, day){
//     return futureDate = new Date(year, month-1, day)
// }

// function timeToDate(futureDate) {
//     let datenow = new Date().getTime
//     let timeDiff = futureDate - datenow
//     let daysleft = Math.ceil(timeDiff / (1000*60*60*24))

//     console.log(`Faltam ${daysleft} dias para ${futureDate}`)
// }


// console.log(timeToDate(futureDay(2024,10,5)))

// console.log(futureDay(2024,10,5))


// AULA ************************************************

// const loadTemp = () => {
//     const futureDate = new Date('2024-11-30T12:00:00').getTime()
//     const time = timeToDate(futureDate)
//     console.log(time)

//     document.getElementById('dias').innerText = `Dias ${time.days}`;
//     document.getElementById('horas').innerText = `Horas ${time.hours}`;
//     document.getElementById('minutos').innerText = `Minutos ${time.minutes}`;
//     document.getElementById('segundos').innerText = `Segundos ${time.seconds}`;
// }