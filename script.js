const CONTAINER_SIZE = 800;

function makeGrid() {
    // get form submission
    const num_blocks = document.getElementById('grid-size').value;
    if (num_blocks == "default") {
        alert("Please select a grid size to continue.");
        return;
    }
    // create grid
    const container = document.querySelector('.container');
    container.style['grid-template-columns'] = `repeat(${num_blocks}, ${CONTAINER_SIZE/num_blocks}px)`
    for (let i = 0; i < Math.pow(num_blocks, 2); i++) {
        const block = document.createElement('div');
        block.style.border = '1px solid black';
        container.appendChild(block);
    }
}