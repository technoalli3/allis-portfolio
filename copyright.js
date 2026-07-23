(function () {
  const elements = document.querySelectorAll('[data-copyright-placeholder]');
  const COPYRIGHT_YEAR = new Date().getFullYear();

  elements.forEach((element) => {
    element.textContent = `Copyright ${COPYRIGHT_YEAR}`;
  });
})();
