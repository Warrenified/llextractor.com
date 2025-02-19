// Copy contract address to clipboard
document.getElementById('copyAddress').addEventListener('click', async () => {
    const address = '9MY2ysr22xXXu7HGBwMzAZLjk2upLVKyb1gJtGCdpump';
    try {
        await navigator.clipboard.writeText(address);
        const button = document.getElementById('copyAddress');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}); 