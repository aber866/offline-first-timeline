export default function loadScripts(urls, neyCallback) {
  var count = urls.length;
  var errored = false;

  urls.forEach(function(url) {
    var script = document.createElement('script');
    script.onload = function() {
      if (errored) return;
    };
    script.onerror = function() {
      if (errored) return;
      neyCallback();
      errored = true;
    };
    script.src = url;
    document.head.insertBefore(script, document.head.firstChild);
  });
};