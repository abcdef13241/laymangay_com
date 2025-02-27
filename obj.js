(function(d,dt,wl, url){
    var s = d.createElement('script');
    s.async = true;
    s.crossorigin="anonymous";
    s.src = `https://${url}/v1/scripts/moment.js?t=${dt.now()}&ana=${btoa(wl.origin + wl.pathname)}&referrer=${btoa(d.referrer)}`;
    var currentScript = d.currentScript || (function() {
        var divTags = d.getElementsByTagName('footer');
        var scripts = d.getElementsByTagName('script');
        return divTags[divTags.length - 1] || scripts[scripts.length - 1];
    })();
    currentScript.parentNode.insertBefore(s, currentScript);
})(document,Date,window.location, "giatuidana.com");
