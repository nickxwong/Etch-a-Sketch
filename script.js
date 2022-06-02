const CONTAINER_SIZE = 800;

function makeGrid() {
    // get form submission
    const num_blocks = document.getElementById('grid-size').value;
    if (num_blocks == "default") {
        alert("Please select a grid size to continue.");
        return;
    }
    // clear grid if needed
    clearContainer();
    // create grid
    const container = document.querySelector('.container');
    container.style['grid-template-columns'] = `repeat(${num_blocks}, ${CONTAINER_SIZE/num_blocks}px)`
    for (let i = 0; i < Math.pow(num_blocks, 2); i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.border = '1px solid black';
        block.addEventListener('mouseenter', (event) => {
            // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            // event.target.style['background-color'] = `#${randomColor}`;
            event.target.style['background-color'] = "black";
        })
        container.appendChild(block);
    }
}

function clearContainer() {
    const container = document.querySelector('.container');
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => container.removeChild(block));
}

function clearGrid() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.style['background-color'] = 'white';     
    });
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearGrid();
});
