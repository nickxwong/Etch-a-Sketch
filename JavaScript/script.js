const CONTAINER_SIZE = 800;

function getTransparency(rgba) {
    const values = rgba.replace(/[^\d,.]/g, '').split(',');
    return parseFloat(values[3]);
}

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
        block.style['background-color'] = 'rgba(0, 0, 0, 0)';
        block.addEventListener('mouseenter', (event) => {
            let transparency = getTransparency(event.target.style.backgroundColor);
            if (transparency < 1) {
                event.target.style['background-color'] = `rgba(0, 0, 0, ${transparency + 0.2})`;    
            }
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
        block.style['background-color'] = 'rgba(0, 0, 0, 0)';     
    });
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearGrid();
});

function screenshot() {
    html2canvas(document.querySelector('.container')).then(function(canvas) {
        canvas.toBlob(blob => {
            navigator.clipboard.write([new ClipboardItem({[blob.type]: blob})]);
        });
    });
    alert("Drawing copied to clipboard!");
}