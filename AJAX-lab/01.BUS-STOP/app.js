function getInfo() {
    const stopId = document.querySelector('#stopId');
    const busStop = document.querySelector('#stopName');
    const schedules = document.querySelector('#buses');
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            busStop.textContent = data.name;
            schedules.innerHTML = Object.entries(data.buses).map(ele => {
                let busId = ele[0];
                let time = ele[1];
                return `<li>Bus ${busId} arrives in ${time}</li>`;
            }).join('')
        })
        .catch(error => {
            busStop.textContent = 'ERROR';
            schedules.innerHTML = '';
        })
}