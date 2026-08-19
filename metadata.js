(function() {
    const pageTitlesPlaceholder = document.querySelectorAll('[metadata-title-placeholder]');
    const pageTitle = document.title;

    pageTitlesPlaceholder.forEach((placeholder) => {
        placeholder.setAttribute('content', pageTitle);
    });
})();