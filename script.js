const x0 = getRandomInt(8);
const y0 = getRandomInt(8);


document.getElementById('random-coordinates').textContent = `Random Point (p0): (${x0}, ${y0})`;

function calculateDistance() {
    const x1 = parseInt(document.getElementById('txt1').value, 10);
    const y1 = parseInt(document.getElementById('txt2').value, 10);

    if (isNaN(x1) || isNaN(y1)) {
        alert("Please enter valid coordinates for point 1.");
        return;
    }

    const distance = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));

  
    document.getElementById('txt3').value = distance.toFixed(2);
}