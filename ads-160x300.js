(function() {
  var container = document.getElementById("ad-160x300");

  if (container) {
    // Set Adsterra configuration
    var configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : 'ef72795a8779ee018916983acc759db4',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    container.appendChild(configScript);

    // Load the invoke.js script
    var adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = 'https://www.highperformanceformat.com/ef72795a8779ee018916983acc759db4/invoke.js';
    adScript.async = true;
    container.appendChild(adScript);
  } else {
    console.warn('Ad container #ad-160x300 not found.');
  }
})();
