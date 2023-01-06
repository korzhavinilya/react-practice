/**
 * браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});
