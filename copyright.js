(function () {
  const elements = document.querySelectorAll('[data-copyright-placeholder]');
  const COPYRIGHT_YEAR = new Date().getFullYear();

  elements.forEach((element) => {
    element.textContent = `\u00A9Copyright ${COPYRIGHT_YEAR}`;
  });
})();
