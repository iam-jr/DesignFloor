// JavaScript for handling form submission and validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Assuming we're sending the data to the backend (For demonstration purposes)
    console.log('Form submitted:', { name, email, message });

    // Clear the form after submission
    document.getElementById('contact-form').reset();

    // Display a success message
    alert('Thank you for reaching out! We will get back to you soon.');
});
 // Open video in popup on click or hover
 document.querySelectorAll('.service-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const videoUrl = item.getAttribute('data-video');
        openVideoPopup(videoUrl);
    });

    item.addEventListener('mouseenter', function() {
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', function() {
        item.classList.remove('active');
    });
});

// Function to open the popup
function openVideoPopup(url) {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('video-frame');
    iframe.src = url;
    popup.style.display = 'flex';
}

// Function to close the popup
function closeVideoPopup() {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('video-frame');
    iframe.src = '';  // Stop the video
    popup.style.display = 'none';
}