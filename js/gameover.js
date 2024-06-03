'use strict'
{
    //キーが押されたとき
    document.addEventListener('keydown', function (event) {
        // キーがエンターキーなら
        if (event.key === 'Enter') {
            window.location.href = 'start.html';//'main.html'に移動
        }
    });

    //キーが押されたとき
    document.addEventListener('keydown', function (event) {
        // キーがエスケープきーなら
        if (event.key === 'Escape') {

            //
            let endalert = confirm('ステータスをリセットしてスタート画面に戻ります');

            //confirmがtrueなら
            if (endalert === true) {
                //ローカルストレージ削除
                localStorage.removeItem("mycharaobj");

                //'main.html'に移動
                window.location.href = 'start.html';
            }
        }
    });
}
