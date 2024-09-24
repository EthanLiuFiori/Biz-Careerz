window.onload = function() {
    const bg = document.querySelector('body');
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Get image dimensions (assuming image is fully loaded)
    const img = new Image();
    img.src = 'Background.png'; 
    img.onload = function() {
        const imgWidth = img.width;
        const imgHeight = img.height;

        // Calculate random position offsets
        const offsetX = Math.random() * (imgWidth - viewportWidth);
        const offsetY = Math.random() * .75*(imgHeight - viewportHeight);

        // Set the background position
        bg.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
        bg.style.backgroundSize = `${imgWidth}px ${imgHeight}px`; // Match image size exactly
    };
};

const dragSources = document.getElementsByClassName('skills');
const dropZone = document.getElementById('dropzone');


// Define a custom data type
const ITEM_TYPE = 'text/plain';

// Add unique IDs to each skill if not already present
Array.from(dragSources).forEach((dragSource, index) => {
    if (!dragSource.id) {
        dragSource.id = `skill${index + 1}`;
    }

    dragSource.setAttribute('draggable', 'true'); // Make the elements draggable

    // Add event listeners to all drag source elements
    dragSource.addEventListener('dragstart', (event) => {
        // Set the data with the ID of the dragged item
        event.dataTransfer.setData(ITEM_TYPE, dragSource.id);
        event.dataTransfer.effectAllowed = 'move';
    });
});

// Drag over event
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Allow drop
    event.dataTransfer.dropEffect = 'move';
});

// Drop event
dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    
    // Retrieve the ID of the dragged item
    const id = event.dataTransfer.getData(ITEM_TYPE);

    // Check if the dragged element is valid
    if (id) {
        // Find the dragged element by ID
        const draggedElement = document.getElementById(id);
        
        const dropY = event.clientY;
        let closestElement = null;
        let closestDistance = Infinity;

        Array.from(dropZone.children).forEach(child => {
            const rect = child.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - dropY);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestElement = child;
            }
        });

        if (closestElement) {
            const rect = closestElement.getBoundingClientRect();
            if (dropY < rect.top + rect.height / 2) {
                dropZone.insertBefore(draggedElement, closestElement);
            } else {
                dropZone.insertBefore(draggedElement, closestElement.nextSibling);
            }
        } else {
            dropZone.appendChild(draggedElement); // If no children, append to drop zone
        }

        // Reset styles
        draggedElement.style.marginBottom = '0'; // Remove margin that might cause misalignment
        draggedElement.style.position = 'relative';

    } else {
        // Handle the case for invalid drop if necessary
        dropZone.textContent = 'Invalid item dropped!';
    }
});


// Function to get the current order of items
// Function to get the current order of items
function getCurrentOrder() {
    const children = dropZone.children;
    let order = [];

    for (let i = 0; i < children.length; i++) {
        const skillId = children[i].id;
        const skillElement = document.getElementById(skillId);
        
        if (skillElement) {
            order.push(skillElement.textContent.trim());
            
            
        }
    }
    order.splice(0,1);
    if (order.length < 6) {
        document.getElementById('box1').textContent = 'Please add at least 7 skills';
    } else {
        console.log(order)
        sessionStorage.setItem('order', JSON.stringify(order));
        window.location.href = 'test.html';
    }
}