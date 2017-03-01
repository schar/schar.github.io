$(function() {
    if (window.DeviceOrientationEvent) {
        window.ondeviceorientation = function(e) {
            alpha = -4*Math.round(e.alpha);
            beta = Math.round(e.beta);
            gamma = 45+4*Math.round(e.gamma);
            rotate = 'rotateX('+gamma+'deg) rotateY('+alpha+'deg)';
            if (window.orientation === -90) {
                setTimeout(function() {
                    window.scrollTo(0,100000);
                }, 20);
                $('.alert').addClass('hidden');
                $('.cube').css('-webkit-transform', rotate);
            } else {
                $('.alert').removeClass('hidden');
            }
        }
    }
});