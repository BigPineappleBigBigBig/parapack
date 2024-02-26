!function (b, c) {
    function e() {
        c.querySelector("html").classList.add("mobile");
        var g = 750, i = screen.width, j = screen.height, k = i / g,
            l = i.viewMeta || c.querySelector("[name=viewport]") || c.createElement("meta");
        // eslint-disable-next-line max-len
        i.viewMeta || c.getElementsByTagName("head")[0].appendChild(l);
        l.setAttribute("name", "viewport");
        var cv = "width=" + g + ", initial-scale=" + k + ",maximum-scale=" + k + ",minimum-scale=" + k + ", user-scalable=no,target-densitydpi=device-dpi,minimal-ui,uc-fitscreen=no";
        l.setAttribute("content", cv);
        i.viewMeta = l;
        window.viewPortNum = k;
        localStorage.setItem('mobile_viewport', cv);
    }

    e();
    b.addEventListener("resize", function () {
        e();
    }, !1);
    "onorientationchange" in b && b.addEventListener("orientationchange", function () {
        e();
    }, !1), b.showPlaceholder = 1;
}(window, document);
