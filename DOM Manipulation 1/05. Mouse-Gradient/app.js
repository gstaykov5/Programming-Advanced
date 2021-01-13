function attachGradientEvents() {
    const mouseMove = document.getElementById('gradient-box');
    mouseMove.addEventListener('mousemove', mouseMovee, false);

    const text = document.getElementById('result');

    function mouseMovee(e) {
        text.textContent = `${((e.clientX / 308) * 100).toFixed(0)}%`;
        console.log(e);
    }
}