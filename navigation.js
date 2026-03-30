document.addEventListener('keydown', function(event) {
    const pages = ['index.html', '2.html', '3.html', '4.html', '5.html', '6.html', '7.html', '8.html', '9.html', '10.html'];
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === '/') currentPage = 'index.html';
    
    let currentIndex = pages.indexOf(currentPage);
    
    // Fallback for cases where it's not index.html but maybe just the directory
    if (currentIndex === -1 && (currentPage === '' || currentPage === undefined)) {
        currentIndex = 0;
    }

    if (event.key === 'ArrowRight' || event.key === ' ') {
        if (currentIndex < pages.length - 1) {
            window.location.href = pages[currentIndex + 1];
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentIndex > 0) {
            window.location.href = pages[currentIndex - 1];
        }
    }
});
