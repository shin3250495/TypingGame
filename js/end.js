'use strict'
{
    //ステータス表示エリア取得
    const lvLabel = document.getElementById('lv');
    const hppLabel = document.getElementById('hp');
    const atkLabel = document.getElementById('atk');

    //ローカルストレージから自分のキャラの値を取る
    const mojimycharaobj = localStorage.getItem("mycharaobj");
    const mycharaobj = JSON.parse(mojimycharaobj);

    //自分のキャラの値をオブジェクトから変数に代入
    let lv = mycharaobj.lv;
    let hp = mycharaobj.hp;
    let atk = mycharaobj.atk;

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

    //ロードした時に初期ステータス表示関数実行
    document.addEventListener('DOMContentLoaded', firststatusdisplay);


    //初期のステータス表示関数
    function firststatusdisplay() {
        //自分
        lvLabel.textContent = "Lv:" + lv;
        hppLabel.textContent = "HP:" + hp;
        atkLabel.textContent = "ATK:" + atk;
    }
}
