function a() {
    console.log('called');
}

a();

//上記を即時関数に書き換えると以下のようになる

(function () {
    console.log('called');
})();