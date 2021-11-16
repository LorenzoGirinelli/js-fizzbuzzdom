const boxesContainer = document.querySelector(`.container`);

for(let i = 1; i <= 100; i++) {
    console.log(i);
    const newBox = `
        <div class="box">${i}</div>
    `;

    boxesContainer.innerHTML += newBox;
}