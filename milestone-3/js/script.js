const boxesContainer = document.querySelector(`.container`);

for(let i = 1; i <= 100; i++) {
    if( i % 3 === 0 && i % 5 === 0) {
    console.log (`fizzBuzz`)
    } else if( i % 3 === 0){
        console.log(`fizz`)
    } else if( i % 5 === 0) {
        console.log(`buzz`)
    } else if( i % 3 === 0 && i % 5 === 0) {
        console.log (`fizzBuzz`)
    } else{
        console.log (i)
    } 
}
for(let i = 1; i <= 100; i++) {
    let fizzORBuzz;
    if( i % 3 === 0) {
        fizzORBuzz = `fizz `;
    }else if( i % 5 === 0) {
        fizzORBuzz = `buzz `;
    }
    const newBox = `
        <div class="box ${fizzORBuzz}">${i}</div>
    `;

    boxesContainer.innerHTML += newBox;
}