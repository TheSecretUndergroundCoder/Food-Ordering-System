let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    total += price;
    updateOrderList();
    updateTotal();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = "";
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
        orderList.appendChild(li);
    });
}

function updateTotal() {
    document.getElementById('total').textContent = total.toFixed(2);
}

function placeOrder() {
    // Implement order placement logic (e.g., send to server, show confirmation, etc.)
    alert("Order placed!");
    // Reset order
    order = [];
    total = 0;
    updateOrderList();
    updateTotal();
}
