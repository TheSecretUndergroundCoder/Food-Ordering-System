// Sample menu items
const menu = [
    { item: 'Burger', price: 8.99 },
    { item: 'Pizza', price: 12.99 },
    { item: 'Salad', price: 6.99 },
    // Add more menu items as needed
];

let order = [];
let total = 0;

// Function to initialize the menu
function initializeMenu() {
    const menuContainer = document.querySelector('.menu');
    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.textContent = `${item.item} - $${item.price.toFixed(2)}`;
        menuItem.onclick = () => addToOrder(item.item, item.price);
        menuContainer.appendChild(menuItem);
    });
}

// Function to add an item to the order
function addToOrder(item, price) {
    order.push({ item, price });
    total += price;
    updateOrderList();
    updateTotal();
}

// Function to update the order list in the UI
function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = "";
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
        orderList.appendChild(li);
    });
}

// Function to update the total in the UI
function updateTotal() {
    document.getElementById('total').textContent = total.toFixed(2);
}

// Function to place the order
function placeOrder() {
    if (order.length > 0) {
        // Store order details in localStorage
        const orderDetails = { order, total };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        // Redirect to checkout.html
        window.location.href = "checkout.html";
    } else {
        alert("Your order is empty. Please add items before placing an order.");
    }
}

// Call the initializeMenu function when the script loads
initializeMenu();
