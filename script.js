const CONTAINER_SIZE = 800;

function makeGrid() {
    // get form submission
    const num_blocks = document.getElementById('grid-size').value;
    if (num_blocks == "default") {
        alert("Please select a grid size to continue.");
        return;
    }
    // clear grid if needed
    clearGrid();
    // create grid
    const container = document.querySelector('.container');
    container.style['grid-template-columns'] = `repeat(${num_blocks}, ${CONTAINER_SIZE/num_blocks}px)`
    for (let i = 0; i < Math.pow(num_blocks, 2); i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.border = '1px solid black';
        container.appendChild(block);
    }
}

function clearGrid() {
    const container = document.querySelector('.container');
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => container.removeChild(block));
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearGrid();
});