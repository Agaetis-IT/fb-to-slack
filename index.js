"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = function (req, res) {
    var message = "Hello World";
    res.status(200).send(message);
};
js = d.createElement(s);
js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
(document, 'script', 'facebook-jssdk');
;
window.fbAsyncInit = function () {
    FB.init({
        appId: '9999999999999999',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0'
    });
    FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.authResponse) {
            _this.checkLoginState();
        }
        else {
            console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
        }
    });
};
exports.helloWorld = function (req, res) {
    var message = "Hello World";
    res.status(200).send(message);
};
