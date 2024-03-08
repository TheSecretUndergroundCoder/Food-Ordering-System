document.addEventListener('DOMContentLoaded', function () {
    displayOrderSummary();
});

function displayOrderSummary() {
    const orderList = document.getElementById('order-list');
    const total = document.getElementById('total');

    // Fetch order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    if (orderDetails && orderDetails.order.length > 0) {
        orderDetails.order.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
            orderList.appendChild(li);
        });

        total.textContent = orderDetails.total.toFixed(2);
    } else {
        // Redirect to index.html if no order details found
        alert("No order details found. Redirecting to the main page.");
        window.location.href = "index.html";
    }
}

function confirmOrder() {
    // Implement order confirmation logic (e.g., send to server, show confirmation, etc.)
    alert("Order confirmed! Thank you for your purchase.");

    // Clear order details from localStorage
    localStorage.removeItem('orderDetails');

    // Redirect to index.html
    window.location.href = "index.html";
}
