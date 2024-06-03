'use strict'
{
    // TODO
    //プライバシーで読み込み時に再生されない
    //　ボタンでサウンド　オン　オフ　作る


    //ロードした時にbgm再生
    document.addEventListener('DOMContentLoaded', bacBgm);

    //キーが押されたとき
    document.addEventListener('keydown', function (event) {
        // キーがエンターキーなら
        if (event.key === 'Enter') {

            //決定サウンド再生
            playDecisionSound();

            // //audioElement.play();が終わった時に
            // audioElement.onended = function () {
            //     //'main.html'に移動
            //     window.location.href = 'main.html';
            // };

            window.location.href = 'main.html';
        }
    });

    //キーが押されたとき
    document.addEventListener('keydown', function (event) {
        // キーがエスケープきーなら
        if (event.key === 'Escape') {

            //
            let endalert = confirm('ステータスをリセットして最初からしますか？');

            //confirmがtrueなら
            if (endalert === true) {
                //ローカルストレージ削除
                localStorage.removeItem("mycharaobj");

                //'main.html'に移動
                window.location.href = 'start.html';
            }
        }
    });

    // ロードした時に関数実行
    document.addEventListener('DOMContentLoaded', function () {

        //ステータス表示エリア取得
        const lvLabel = document.getElementById('lv');
        const exLabel = document.getElementById('ex');
        const hppLabel = document.getElementById('hp');
        const atkLabel = document.getElementById('atk');

        // ローカルストレージから自分のキャラの値を取る
        const mojimycharaobj = localStorage.getItem("mycharaobj");
        const mycharaobj = JSON.parse(mojimycharaobj);

        //自分のキャラ変数
        let lv;
        let ex;
        let hp;
        let atk;

        if (mycharaobj === null) {
            // データがない場合の初期値
            lv = 1;
            ex = 10;
            hp = 10;
            atk = 1;

            //ローカルストレージに値を保存する関数実行
            keepvalue(lv, ex, hp, atk);

        } else {
            //値代入
            lv = mycharaobj.lv;
            ex = mycharaobj.ex;
            hp = mycharaobj.hp;
            atk = mycharaobj.atk;
        }

        lvLabel.textContent = "Lv:" + lv;
        hppLabel.textContent = "HP:" + hp;
        atkLabel.textContent = "ATK:" + atk;
        exLabel.textContent = "Ex:" + ex;
    });

    //値をローカルストレージに保存する関数
    function keepvalue(lv, ex, hp, atk) {
        //自分のキャラオブジェクト作成
        const mycharaobj = { lv: lv, ex: ex, hp: hp, atk: atk }
        //自分のキャラオブジェクトを文字列に変更
        const mojimycharaobj = JSON.stringify(mycharaobj);
        //文字列のオブジェクトをローカルストレージに保存
        localStorage.setItem("mycharaobj", mojimycharaobj);
    }

    //バックbgm
    function bacBgm() {
        const bgm = document.getElementById('bacBgm');
        // 音量を50%に設定
        bgm.volume = 0.5;
        //サウンド再生
        bgm.play();
    }

    //決定サウンド関数
    function playDecisionSound() {
        const audioElement = document.getElementById('decisionSound');
        // 音量を50%に設定
        audioElement.volume = 0.5;
        //サウンド一時停止
        audioElement.pause();
        // 再生位置を先頭に戻す
        audioElement.currentTime = 0;
        //サウンド再生
        audioElement.play();
    }

}
