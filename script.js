document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('qr-form');
    const qrCodeContainer = document.getElementById('qr-code-container');
    const downloadLink = document.getElementById('download-link');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const data = document.getElementById('data').value;
        generateQRCode(data);
    });

    function generateQRCode(data) {
        qrCodeContainer.innerHTML = ''; // Clear previous QR code
        QRCode.toDataURL(data, function(err, url) {
            if (err) {
                console.error(err);
                return;
            }
            const img = document.createElement('img');
            img.src = url;
            qrCodeContainer.appendChild(img);

            // Update download link
            downloadLink.href = url;
            downloadLink.style.display = 'inline-block';
        });
    }
});