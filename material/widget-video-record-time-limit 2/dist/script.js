var TIME_LIMIT = 5100;

var widget = uploadcare.Widget('[role=uploadcare-uploader]');

widget.onDialogOpen(dialog => {
  // выбираем целевой элемент
  var target = dialog.dialogElement[0].querySelector('.uploadcare--camera');

  // создаём экземпляр MutationObserver
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      var classes = Array.from(mutation.target.classList);
      var statusClass = classes[classes.length - 1];

      if (statusClass === 'uploadcare--camera_status_recording') {
        var stopButton = dialog.dialogElement[0].querySelector('.uploadcare--camera__button_type_stop-record');
        setTimeout(() => {
          stopButton.click();
        }, TIME_LIMIT);
      }
    });
  });

  // конфигурация нашего observer:
  var config = { attributes: true, attributeFilter: ['class'] };

  // передаём в качестве аргументов целевой элемент и его конфигурацию
  observer.observe(target, config);

  // позже можно остановить наблюдение
  // observer.disconnect();
});