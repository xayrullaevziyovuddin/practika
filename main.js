// Отключение масштабирования страницы
function disablePageZoom() {
    // Обработка события масштабирования
    function handleZoom(event) {
      if (event.ctrlKey === true || event.metaKey) {
        // Отмена действия масштабирования
        event.preventDefault();
      }
    }
  
    // Добавление обработчика события масштабирования
    document.addEventListener('wheel', handleZoom, { passive: false });
    document.addEventListener('keydown', handleZoom, { passive: false });
  }
  
  // Вызов функции отключения масштабирования страницы
  disablePageZoom();