document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('subscription-form');
    var submitButton = document.getElementById('submit-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(form);

        // You can add additional form data processing here if needed

        // Redirect to another page
        window.location.href = 'index.html';
    });
});
