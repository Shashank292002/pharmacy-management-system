// payment.js
const stripePublicKey = 'your_publishable_key_here'; // Replace with your actual Stripe Publishable Key
const stripe = Stripe(stripePublicKey);

const elements = stripe.elements();
const cardElement = elements.create('card');

cardElement.mount('#card-element');

const paymentForm = document.getElementById('payment-form');
const cardErrors = document.getElementById('card-errors');
const submitButton = document.getElementById('submit');

paymentForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.disabled = true;

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
        cardErrors.textContent = error.message;
        submitButton.disabled = false;
    } else {
        // Send the token to your server to complete the payment
        // Example: You would use fetch or an AJAX request to send the token to your server.
        // Replace 'your_server_endpoint_here' with the actual URL of your server endpoint.
        fetch('your_server_endpoint_here', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token.id,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Handle the server response (e.g., display a confirmation message)
            console.log(data);
            alert('Payment successful!'); // Replace with your desired confirmation method
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Payment failed.'); // Handle errors appropriately
        });
    }
});
