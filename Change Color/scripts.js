function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('colorBtn').addEventListener('click', function() {
    let color = getRandomColor();
    let textoColor = document.getElementById('colorCode');
    textoColor.textContent = color;
    textoColor.style.color = color;
    document.body.style.background = color;
});