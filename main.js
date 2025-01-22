document.addEventListener(&quot;contextmenu&quot;, function(event){
        event.preventDefault();
    }, false);

    document.addEventListener(&quot;copy&quot;, function(event){
        // Change the copied text if you want
        event.clipboardData.setData(&quot;text/plain&quot;, &quot;No se permite copiar en esta página web&quot;);
        // Prevent the default copy action
        event.preventDefault();
    }, false);