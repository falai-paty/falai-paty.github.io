window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/72x72\/",
    "ext": ".png",
    "source": {
        "concatemoji": "https:\/\/wp-themes.com\/wp\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.5-beta2-36872"
    }
};
! function(a, b, c) {
    function d(a) {
        var c, d = b.createElement("canvas"),
            e = d.getContext && d.getContext("2d"),
            f = String.fromCharCode;
        if (!e || !e.fillText) return !1;
        switch (e.textBaseline = "top", e.font = "600 32px Arial", a) {
            case "flag":
                return e.fillText(f(55356, 56806, 55356, 56826), 0, 0), d.toDataURL().length > 3e3;
            case "diversity":
                return e.fillText(f(55356, 57221), 0, 0), c = e.getImageData(16, 16, 1, 1).data.toString(), e.fillText(f(55356, 57221, 55356, 57343), 0, 0), c !== e.getImageData(16, 16, 1, 1).data.toString();
            case "simple":
                return e.fillText(f(55357, 56835), 0, 0), 0 !== e.getImageData(16, 16, 1, 1).data[0];
            case "unicode8":
                return e.fillText(f(55356, 57135), 0, 0), 0 !== e.getImageData(16, 16, 1, 1).data[0]
        }
        return !1
    }

    function e(a) {
        var c = b.createElement("script");
        c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }
    var f, g, h, i;
    for (i = Array("simple", "flag", "unicode8", "diversity"), c.supports = {
            everything: !0
        }, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
    c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
        c.DOMReady = !0
    }, c.supports.everything || (g = function() {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
        "complete" === b.readyState && c.readyCallback()
    })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);