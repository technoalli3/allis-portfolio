(function() {
    const pageTitlesPlaceholder = document.querySelectorAll('[metadata-title-placeholder]');
    const pageDescriptionsPlaceholder = document.querySelectorAll('[metadata-description-placeholder]');
    const pageDescription = document.querySelector('p[description]').textContent;
    const pageTitle = document.title;

    pageTitlesPlaceholder.forEach((placeholder) => {
        placeholder.setAttribute('content', pageTitle);
        console.log(`Set metadata title to ${pageTitle}`);
    });
    pageDescriptionsPlaceholder.forEach((placeholder) => {
        placeholder.setAttribute('content', pageDescription);
        console.log(`Set metadata description to ${pageDescription}`);
    });
})();