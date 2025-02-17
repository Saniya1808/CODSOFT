const menuItems = [
    {
        name: "Pear & Orange",
        category: "breakfast",
        image: "https://www.shutterstock.com/image-photo/flying-slices-fruit-apple-pear-600nw-361046231.jpg", 
        description: "20 min 4.8",
        price: "$25.00"
    },
    // ... more menu items
];

const menuItemsContainer = document.querySelector('.menu-items');
const categoryButtons = document.querySelectorAll('.category-filter button');

function displayMenuItems(category = 'all') {
    menuItemsContainer.innerHTML = ''; // Clear previous items

    const filteredItems = category === 'all' ? menuItems :
        menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
        `;
        menuItemsContainer.appendChild(menuItemDiv);
    });
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        displayMenuItems(category);

        // Update active button state
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

displayMenuItems(); // Initial display