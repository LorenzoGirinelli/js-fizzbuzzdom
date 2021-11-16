const boxesContainer = document.querySelector(`.container`);

for(let i = 1; i <= 100; i++) {
    let threeOrFive;
    if( i % 3 === 0) {
        threeOrFive = `three`;
    }
    if( i % 5 === 0) {
        threeOrFive = `five`;
    }
    const newBox = `
        <div class="box ${threeOrFive}">${i}</div>
    `;

    boxesContainer.innerHTML += newBox;
}