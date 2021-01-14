function attachEventsListeners() {
    const distances = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };
    

    function calc(val, from, to) {
        const inMeters = val * distances[from] / distances[to];

        return inMeters;
    }

    document.querySelector('#convert').addEventListener('click', convert)
    const input = document.querySelector('#inputDistance');
    const output = document.querySelector('#outputDistance');
    
    function convert(e) {
        const inputUnits = document.querySelector('#inputUnits').selectedIndex;
        const inputOptionValues = document.getElementsByTagName("option")[inputUnits].value;
        const outputUnits = document.querySelector('#outputUnits').selectedIndex;
        const outputOptionValues = document.getElementsByTagName("option")[outputUnits].value;
        const inputValue = input.value
        
        const convertedValue = calc(inputValue, inputOptionValues, outputOptionValues);
        output.value = (convertedValue);
    }
}