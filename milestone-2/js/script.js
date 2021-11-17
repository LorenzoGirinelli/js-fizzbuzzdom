for(let i = 1; i <= 100; i++) {
    let newDivtext;
    if( i % 3 === 0 && i % 5 === 0) {
        newDivtext = `fizzBuzz`;
    } else if( i % 3 === 0) {
        newDivtext = `fizz`;
    } else if( i % 5 === 0) {
        newDivtext = `Buzz`;
    } else{
        newDivtext = i;
    } 
}
const newBox = `
    <div class="box">${newDivtext}</div>
`;
const itemsContainer = document.querySelector(`.items-container`);
itemsContainer.innerHTML = newBox;