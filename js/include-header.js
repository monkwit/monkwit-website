document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="blog-header">
            <div class="blog-header-content">
                <a href="../index.html"><img src="../images/monkwit-icon.svg" alt="monkwit logo" class="logo" draggable="false"></a>
                <a href="../index.html" class="back-home">Back home</a>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}); 