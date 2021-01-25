function solve() {
    let info = document.querySelector('.info');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    let nextStop = 'depot';
    let arriveSt = nextStop;
    let url = `https://judgetests.firebaseio.com/schedule/${nextStop}.json`;

    function depart() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                info.textContent = `Next stop ${data.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                nextStop = data.next;
                arriveSt = data.name;
            })
            .catch(error => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                info.textContent = 'No moer stations'
            })
    }

    function arrive() {
        info.textContent = `Arriving at ${arriveSt}`
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        url = `https://judgetests.firebaseio.com/schedule/${nextStop}.json`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();