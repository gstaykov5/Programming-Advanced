function attachEventsListeners() {
    function display(value) {
        days.value = value.days;
        hours.value = value.hours;
        minutes.value = value.minutes;
        seconds.value = value.seconds;
    }

    const root = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }
    
    const main = document.querySelector('main');
    main.addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.nodeName === 'INPUT' && e.target.type === 'button') {
            const el = e.target.parentNode.querySelector('input[type="text"]');
            const value = Number(el.value);
            const id = el.id;
            const convertedValue = convert(value, id);
            display(convertedValue);
        }
    }



    function convert(value, from) {
        const inDays = value / root[from];
        return {
            days: inDays * value / root.days,
            hours: inDays * value / root.hours,
            minutes: inDays * value / root.minutes,
            seconds: inDays * value / root.seconds
        }
    }
}