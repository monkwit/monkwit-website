document.addEventListener('DOMContentLoaded', function() {
    // Check if footer already exists to prevent duplicates
    if (!document.querySelector('.footer')) {
        fetch('components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data);
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Fallback footer in case of error
                const fallbackFooter = `
                    <footer class="footer">
                        <div class="footer-content">
                            <p class="copyright">© 2024 Kithara LLC. All rights reserved.</p>
                            <div class="footer-links">
                                <a href="/privacy/index.html">Privacy Policy</a>
                                <span class="separator">•</span>
                                <a href="mailto:monkwitapp&#64;gmail.com">monkwitapp&#64;gmail.com</a>
                            </div>
                        </div>
                    </footer>
                `;
                document.body.insertAdjacentHTML('beforeend', fallbackFooter);
            });
    }
}); 