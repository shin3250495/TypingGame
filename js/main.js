'use strict'
{
    //自分のダメージ用の要素取得
    const mainbacLabel = document.getElementById('main');

    //レベルアップ時の倍率
    //自分
    let myhp = 1.2;
    let myatk = 1.1;
    let myex = 1.5;
    //敵
    let enemyhp = 1.5;
    let enemyatk = 1.3;

    //敵
    const enemyHpLabel = document.getElementById('enemyHp');
    const enemyAtkLabel = document.getElementById('enemyAtk');
    let enemyHp = 10;//敵の体力の初期値
    let enemyHpm = enemyHp//enemyHpの値を保持するため違う変数に入れる
    let enemyAtk = 1;//敵の攻撃力の初期値

    //敵画像
    const enemyImg = document.getElementById('enemyImg');//敵画像エリア取得
    let imageNo = 0;//敵画像き切り替え変数
    const enemyImgs = [//敵画像
        'img/character_monster_slime_green.png',
        'img/character_monster_slime_red.png',
        'img/character_monster_slime_purple.png',
        'img/character_heishi_armor_01_blue.png',
        'img/character_heishi_armor_01_green.png',
        'img/character_heishi_armor_01_red.png',
        'img/character_heishi_armor_02_blue.png',
        'img/character_heishi_armor_02_green.png',
        'img/character_heishi_armor_02_red.png',
        'img/character_monster_zombie_brown.png',

        'img/character_monster_zombie_green.png',
        'img/character_monster_mummy_red.png',
        'img/character_monster_mummy_yellow.png',
        'img/character_monster_skeleton_01.png',
        'img/character_monster_skeleton_02.png',
        'img/character_hero_red.png',
        'img/character_hero_blue_man.png',
        'img/character_hero_blue_woman.png',
        'img/character_hero_yellow_man.png',
        'img/character_hero_pink.png',

        'img/character_hero_green.png',
        'img/character_hero_white.png',
        'img/character_hero_black.png',
        'img/character_hero_silver.png',
        'img/character_hero_gold.png',
        'img/character_teki.png',
        'img/character_monster_dragon_01_red.png',
        'img/character_monster_dragon_01_blue.png',
        'img/character_monster_dragon_01_yellow.png',
        'img/character_monster_dragon_01_green.png',

        'img/character_monster_dragon_01_purple.png',
        'img/character_monster_dragon_01_white.png',
        'img/character_monster_dragon_01_black.png',
        'img/character_monster_shinigami_01.png',
        'img/character_monster_shinigami_02.png',
        'img/character_monster_mao_01.png',
        'img/character_monster_mao_02.png',
        'img/character_monster_mao_03.png',
        'img/character_monster_devil_purple.png',
        'img/character_monster_devil_red.png',
    ];

    //敵の画像
    enemyImg.src = enemyImgs[imageNo];

    //ステータス表示エリア取得
    const lvLabel = document.getElementById('lv');
    const exLabel = document.getElementById('ex');
    const hppLabel = document.getElementById('hp');
    const atkLabel = document.getElementById('atk');

    //ローカルストレージから自分のキャラの値を取る
    const mojimycharaobj = localStorage.getItem("mycharaobj");
    const mycharaobj = JSON.parse(mojimycharaobj);

    //自分のキャラの値をオブジェクトから変数に代入
    let lv = mycharaobj.lv;
    let ex = mycharaobj.ex;
    let hp = mycharaobj.hp;
    let atk = mycharaobj.atk;

    let exm = ex;//exの値を保持するため違う変数に入れる
    let hpm = hp;//hpの値を保持するため違う変数に入れる

    //タイピングエリア変数
    const targetKaLabel = document.getElementById('targetKa')//漢字
    const targetJaLabel = document.getElementById('targetJa')//ひらがな
    const targetLabel = document.getElementById('target'); //ローマ字
    let word;
    let wordJp;
    let wordKa;
    let loc = 0;

    const words = [
        //あ行
        // ['test', 'a', 'a'],
        ['アーティスト', 'あーてぃすと', 'a-thisuto'],
        ['愛', 'あい', 'ai'],
        ['アイコン', 'あいこん', 'aikon'],
        ['アイス', 'あいす', 'aisu'],
        ['青', 'あお', 'ao'],
        ['赤', 'あか', 'aka'],
        ['明かり', 'あかり', 'akari'],
        ['秋', 'あき', 'aki'],
        ['秋の夜長', 'あきのよなが', 'akinoyonaga'],
        ['秋葉原', 'あきはばら', 'akihabara'],
        ['アキレス腱	', 'あきれすけん	', 'akiresuken'],
        ['アクセント', 'あくせんと', 'akusento'],
        ['朝', 'あさ', 'asa'],
        ['朝顔', 'あさがお', 'asagao'],
        ['朝のあいさつ', 'あさのあいさつ', 'asanoaisatu'],
        ['アザラシ', 'あざらし', 'azarasi'],
        ['アサリ', 'アサリ', 'asari'],
        ['アジ', 'あじ', 'aji'],
        ['アジの干物', 'あじのひもの', 'ajinohimono'],
        ['アスパラガス', 'あすぱらがす', 'asuparagasu'],
        ['アスファルト', 'あすふぁると', 'asufaruto'],
        ['アットマーク', 'あっとまーく', 'attoma-ku'],
        ['アップルパイ', 'あっぷるぱい', 'appurupai'],
        ['穴', 'あな', 'ana'],
        ['アナゴ', 'あなご', 'anago'],
        ['兄', 'あに', 'ani'],
        ['アニメーション', 'あにめーしょん', 'anime-shon'],
        ['アヒル', 'あひる', 'ahiru'],
        ['アフロ', 'あふろ', 'afuro'],
        ['アボカド', 'あぼかど', 'abokado'],
        ['甘エビ', 'あまえび', 'amaebi'],
        ['雨', 'あめ', 'ame'],
        ['飴ちゃん', 'あめちゃん', 'ametyan'],
        ['アメとムチ', 'あめとむち', 'ametomuti'],
        ['アメフラシ	', 'あめふらし', 'amefurasi'],
        ['あら奥様', 'あらおくさま', 'araokusama'],
        ['アルマジロ', 'あるまじろ', 'arumajiro'],
        ['アワビ', 'あわび', 'awabi'],
        ['アンケート', 'あんけーと', 'anke-to'],
        //い行
        ['いい天気', 'いいてんき	', 'iitenki'],
        ['いいね！', 'いいね！', 'iine!'],
        ['いい湯だな', 'いいゆだな', 'iiyudana'],
        ['家', 'いえ', 'ie'],
        ['イカ', 'いか', 'ika'],
        ['意気投合', 'いきとうごう', 'ikitougou'],
        ['イクラ', 'いくら', 'ikura'],
        ['石', 'いし', 'isi'],
        ['異常事態', 'いじょうじたい', 'ijoujitai'],
        ['イス', 'いす', 'isu'],
        ['椅子取りゲーム', 'いすとりげーむ', 'isutorige-mu'],
        ['イソギンチャク', 'いそぎんちゃく', 'isogintyaku'],
        ['いただきます', 'いただきます', 'itadakimasu'],
        ['イチゴ', 'いちご', 'itigo'],
        ['イチゴジャム', 'いちごじゃむ', 'itigojamu'],
        ['イチゴ大福', 'いちごだいふく', 'itigodaifuku'],
        ['一本', 'いっぽん', 'ippon'],
        ['糸', 'いと', 'ito'],
        ['井戸', 'いど', 'ido'],
        ['犬', 'いぬ', 'inu'],
        ['犬と散歩', 'いぬとさんぽ', 'inutosanpo'],
        ['イノシシ', 'いのしし', 'inosisi'],
        ['今', 'いま', 'ima'],
        ['意味', 'いみ', 'imi'],
        ['癒し系', 'いやしけい', 'iyasikei'],
        ['色', 'いろ', 'iro'],
        ['色鉛筆', 'いろえんぴつ', 'iroenpitu'],
        ['イワシ', 'いわし', 'iwasi'],
        ['インターネット', 'いんたーねっと', 'inta-netto'],
        //う行
        ['ウグイス', 'うぐいす', 'uguisu'],
        ['ウサギ', 'うさぎ', 'usagi'],
        ['牛', 'うし', 'usi'],
        ['右折禁止', 'うせつきんし', 'usetukinsi'],
        ['嘘', 'うそ', 'uso'],
        ['歌', 'うた', 'uta'],
        ['うっとりする', 'うっとりする', 'uttorisuru'],
        ['腕時計', 'うでどけい', 'udedokei'],
        ['ウナギ', 'うなぎ', 'unagi'],
        ['ウニ', 'うに', 'uni'],
        ['馬', 'うま', 'uma'],
        ['海', 'うみ', 'umi'],
        ['海の日', 'うみのひ', 'uminohi'],
        ['梅', 'うめ', 'ume'],
        ['梅酒', 'うめしゅ', 'umeshu'],
        //え行
        ['エイ', 'えい', 'ei'],
        ['映画館', 'えいがかん', 'eigakan'],
        ['永久歯', 'えいきゅうし', 'eikyuusi'],
        ['英単語', 'えいたんご', 'eitango'],
        ['駅', 'えき', 'eki'],
        ['エクササイズ', 'えくささいず', 'ekusasaizu'],
        ['エスカレーター', 'えすかれーたー', 'esukare-ta-'],
        ['エチケット', 'えちけっと', 'etiketto'],
        ['江戸時代', 'えどじだい', 'edojidai'],
        ['江戸幕府', 'えどばくふ', 'edobakufu'],
        ['海老', 'えび', 'ebi'],
        ['エビフライ', 'えびふらい', 'ebifurai'],
        ['笑み', 'えみ', 'emi'],
        ['エメラルド', 'えめらるど', 'emerarudo'],
        ['エレベーター', 'えれべーたー', 'erebe-ta-'],
        ['えんがわ', 'えんがわ', 'engawa'],
        ['エンディング', 'えんでぃんぐ', 'endhingu'],
        ['鉛筆削り', 'えんぴつけずり', 'enpitukezuri'],
        //お行
        ['おいなりさん', 'おいなりさん', 'oinarisan'],
        ['王様ゲーム', 'おうさまげーむ', 'ousamage-mu'],
        ['オークション', 'おーくしょん', 'o-kushon'],
        ['大掃除', 'おおそうじ', 'oosouji'],
        ['オートバイ', 'おーとばい', 'o-tobai'],
        ['大トロ', 'おおとろ', 'ootoro'],
        ['オカリナ', 'おかりな', 'okarina'],
        ['お気に入り', 'おきにいり', 'okiniiri'],
        ['送りバント', 'おくりばんと', 'okuribanto'],
        ['お好み焼き', 'おこのみやき', 'okonomiyaki'],
        ['お塩ください', 'おしおください', 'osiokudasai'],
        ['お茶', 'おちゃ', 'otya'],
        ['男のロマン', 'おとこのろまん', 'otokonoroman'],
        ['落とし穴', 'おとしあな', 'otosiana'],
        ['おにぎり', 'おにぎり', 'onigiri'],
        ['鬼に金棒', 'おににかなぼう', 'oninikanabou'],
        ['お化け屋敷', 'おばけやしき', 'obakeyasiki'],
        ['お肌つるつる', 'おはだつるつる', 'ohadaturuturu'],
        ['お花見', 'おはなみ', 'ohanami'],
        ['お姫様', 'おひめさま', 'ohimesama'],
        ['オフサイド', 'おふさいど', 'ofusaido'],
        ['お風呂', 'おふろ', 'ofuro'],
        ['お祭り', 'おまつり', 'omaturi'],
        ['おままごと', 'おままごと', 'omamagoto'],
        ['オムライス', 'おむらいす', 'omuraisu'],
        ['オムレツ', 'おむれつ', 'omuretu'],
        ['親子丼', 'おやこどん', 'oyakodon'],
        ['おやつ', 'おやつ', 'oyatu'],
        ['オリーブオイル', 'おりーぶおいる', 'ori-buoiru'],
        ['オリンピック', 'おりんぴっく', 'orinpikku'],
        ['オレンジ', 'おれんじ', 'orenji'],
        ['音速の壁', 'おんそくのかべ', 'onsokunokabe'],
        ['オンライン', 'おんらいん', 'onrain'],
        //か行
        ['カーブ', 'かーぶ', 'ka-bu'],
        ['カーリング', 'かーりんぐ', 'ka-ringu'],
        ['貝', 'かい', 'kai'],
        ['海水浴', 'かいすいよく', 'kaisuiyoku'],
        ['回転寿司', 'かいてんずし', 'kaitenzusi'],
        ['カウンター', 'かうんたー', 'kaunta-'],
        ['カエル', 'かえる', 'kaeru'],
        ['カオス理論', 'かおすりろん', 'kaosuriron'],
        ['顔文字', 'かおもじ', 'kaomoji'],
        ['画家', 'がか', 'gaka'],
        ['カサ', 'かさ', 'kasa'],
        ['カスタネット', 'かすたねっと', 'kasutanetto'],
        ['数の子', 'かずのこ', 'kazunoko'],
        ['風', 'かぜ', 'kaze'],
        ['火星人', 'かせいじん', 'kaseijin'],
        ['仮想現実', 'かそうげんじつ', 'kasougenjitu'],
        ['仮想通貨', 'かそうつうか', 'kasoutuuka'],
        ['家族会議', 'かぞくかいぎ', 'kazokukaigi'],
        ['肩叩き', 'かたたたき', 'katatataki'],
        ['カタルシス', 'かたるしす', 'katarusisu'],
        ['ガチャガチャ', 'がちゃがちゃ', 'gatyagatya'],
        ['学校', 'がっこう', 'gakkou'],
        ['合体ロボ', 'がったいろぼ', 'gattairobo'],
        ['カッパ', 'かっぱ', 'kappa'],
        ['カッパ巻き', 'かっぱまき', 'kappamaki'],
        ['カップラーメン', 'かっぷらーめん', 'kappura-men'],
        ['家庭菜園', 'かていさいえん', 'kateisaien'],
        ['カニ', 'かに', 'kani'],
        ['カヌー', 'かぬー', 'kanu-'],
        ['壁', 'かべ', 'kabe'],
        ['かぼちゃ', 'かぼちゃ', 'kabotya'],
        ['カマキリ', 'かまきり', 'kamakiri'],
        ['かまくら', 'かまくら', 'kamakura'],
        ['鎌倉幕府', 'かまくらばくふ', 'kamakurabakufu'],
        ['神', 'かみ', 'kami'],
        ['神対応', 'かみたいおう', 'kamitaiou'],
        ['紙粘土', 'かみねんど', 'kaminendo'],
        ['ガム', 'がむ', 'gamu'],
        ['カラーコピー', 'からーこぴー', 'kara-kopi-'],
        ['カレー', 'かれー', 'kare-'],
        ['カレンダー', 'かれんだー', 'karenda-'],
        ['川', 'かわ', 'kawa'],
        ['カンガルー', 'かんがるー', 'kangaru-'],
        ['漢字', 'かんじ', 'kanji'],
        ['カンパチ', 'かんぱち', 'kanpati'],
        ['カンフー', 'かんふー', 'kanfu-'],
        //き行
        ['キーボード', 'きーぼーど', 'ki-bo-do'],
        ['消える魔球', 'きえるまきゅう', 'kierumakyuu'],
        ['キク', 'きく', 'kiku'],
        ['北', 'きた', 'kita'],
        ['議長', 'ぎちょう', 'gityou'],
        ['キック', 'きっく', 'kikku'],
        ['絹', 'きぬ', 'kinu'],
        ['キノコ', 'きのこ', 'kinoko'],
        ['騎馬戦', 'きばせん', 'kibasen'],
        ['基本', 'きほん', 'kihon'],
        ['期末テスト', 'きまつてすと', 'kimatutesuto'],
        ['肝試し', 'きもだめし', 'kimodamesi'],
        ['キャッチコピー', 'きゃっちこぴー', 'kyattikopi-'],
        ['キャベツ', 'きゃべつ', 'kyabetu'],
        ['ギャラリー', 'ぎゃらりー', 'gyarari-'],
        ['キャンプ', 'きゃんぷ', 'kyanpu'],
        ['兄弟', 'きょうだい', 'kyoudai'],
        ['今日の日記', 'きょうのにっき', 'kyounonikki'],
        ['恐竜', 'きょうりゅう', 'kyouryuu'],
        ['銀紙', 'ぎんがみ', 'gingami'],
        ['金魚', 'きんぎょ', 'kingyo'],
        ['銀行口座', 'ぎんこうこうざ', 'ginkoukouza'],
        ['筋肉痛', 'きんにくつう', 'kinnikutuu'],
        ['金髪', 'きんぱつ', 'kinpatu'],
        //く行
        ['グーチョキパー', 'ぐーちょきぱー', 'gu-tyokipa-'],
        ['草', 'くさ', 'kusa'],
        ['クッキー', 'くっきー', 'kukki-'],
        ['靴下', 'くつした', 'kutusita'],
        ['ぐっすり眠る', 'ぐっすりねむる', 'gussurinemuru'],
        ['国', 'くに', 'kuni'],
        ['クマ', 'くま', 'kuma'],
        ['グミ', 'ぐみ', 'gumi'],
        ['雲', 'くも', 'kumo'],
        ['くもりのち晴れ', 'くもりのちはれ', 'kumorinotihare'],
        ['クラリネット', 'くらりねっと', 'kurarinetto'],
        ['栗きんとん', 'くりきんとん', 'kurikinton'],
        ['クリスタル', 'くりすたる', 'kurisutaru'],
        ['クリック', 'くりっく', 'kurikku'],
        ['栗にそっくり', 'くりにそっくり', 'kurinisokkuri'],
        ['車', 'くるま', 'kuruma'],
        ['クレーター', 'くれーたー', 'kure-ta-'],
        ['黒い猫', 'くろいねこ', 'kuroineko'],
        ['グローブ', 'ぐろーぶ', 'guro-bu'],
        ['黒酢', 'くろず', 'kurozu'],
        //け行
        ['計画通り', 'けいかくどおり', 'keikakudoori'],
        ['経験値', 'けいけんち', 'keikenti'],
        ['携帯電話', 'けいたいでんわ', 'keitaidenwa'],
        ['毛糸', 'けいと', 'keito'],
        ['消しゴム', 'けしごむ', 'kesigomu'],
        ['毛玉', 'けだま', 'kedama'],
        ['結婚します', 'けっこんします', 'kekkonsimasu'],
        ['ゲリラ豪雨', 'げりらごうう', 'geriragouu'],
        ['剣', 'けん', 'ken'],
        ['研究', 'けんきゅう', 'kenkyuu'],
        ['検索', 'けんさく', 'kensaku'],
        ['けんだま', 'けんだま', 'kendama'],
        ['現場合わせ', 'げんばあわせ', 'genbaawase'],
        ['顕微鏡', 'けんびきょう', 'kenbikyou'],
        //こ行
        ['小悪魔的', 'こあくまてき', 'koakumateki'],
        ['コアラ', 'こあら', 'koara'],
        ['恋', 'こい', 'koi'],
        ['鯉のぼり', 'こいのぼり', 'koinobori'],
        ['コイン', 'こいん', 'koin'],
        ['高気圧', 'こうきあつ', 'koukiatu'],
        ['高速道路', 'こうそくどうろ', 'kousokudouro'],
        ['紅茶', 'こうちゃ', 'koutya'],
        ['ゴージャス', 'ごーじゃす', 'go-jasu'],
        ['コーヒー', 'こーひー', 'ko-hi-'],
        ['ごきげんよう', 'ごきげんよう', 'gokigenyou'],
        ['国語のテスト', 'こくごのてすと', 'kokugonotesuto'],
        ['黒板', 'こくばん', 'kokuban'],
        ['午後', 'ごご', 'gogo'],
        ['小さじ一杯', 'こさじいっぱい', 'kosajiippai'],
        ['こしあん', 'こしあん', 'kosian'],
        ['午前様', 'ごぜんさま', 'gozensama'],
        ['古代遺跡', 'こだいいせき', 'kodaiiseki'],
        ['コタツ', 'こたつ', 'kotatu'],
        ['ごちそうさま', 'ごちそうさま', 'gotisousama'],
        ['コックピット', 'こっくぴっと', 'kokkupitto'],
        ['コップ', 'こっぷ', 'koppu'],
        ['こどもの日', 'こどものひ', 'kodomonohi'],
        ['小鳥', 'ことり', 'kotori'],
        ['粉', 'こな', 'kona'],
        ['子猫ちゃん', 'こねこちゃん', 'konekotyan'],
        ['小春日和', 'こはるびより', 'koharubiyori'],
        ['ご飯まだー？', 'ごはんまだー？', 'gohanmada-?'],
        ['ゴム', 'ごむ', 'gomu'],
        ['ゴルフ', 'ごるふ', 'gorufu'],
        ['怖い話', 'こわいはなし', 'kowaihanasi'],
        ['コンサート', 'こんさーと', 'konsa-to'],
        ['こんにちは', 'こんにちは', 'konnitiha'],
        ['コンピュータ', 'こんぴゅーた', 'konpyu-ta'],
        //さ行
        ['サーカス', 'さーかす', 'sa-kasu'],
        ['サーモン', 'さーもん', 'sa-mon'],
        ['サイコロ', 'さいころ', 'saikoro'],
        ['財布落とした', 'さいふおとした', 'saifuotosita'],
        ['桜', 'さくら', 'sakura'],
        ['サクラサク', 'さくらさく', 'sakurasaku'],
        ['さくらもち', 'さくらもち', 'sakuramoti'],
        ['さくらんぼ', 'さくらんぼ', 'sakuranbo'],
        ['座敷わらし', 'ざしきわらし', 'zasikiwarasi'],
        ['サッカー', 'さっかー', 'sakka-'],
        ['作曲家', 'さっきょくか', 'sakkyokuka'],
        ['サバ', 'さば', 'saba'],
        ['サファイア', 'さふぁいあ', 'safaia'],
        ['サボテンの花', 'さぼてんのはな', 'sabotennohana'],
        ['さようなら', 'さようなら', 'sayounara'],
        ['皿', 'さら', 'sara'],
        ['ザリガニ', 'ざりがに', 'zarigani'],
        ['ザリガニ釣り', 'ざりがにつり', 'zariganituri'],
        ['サル', 'さる', 'saru'],
        ['さるのこしかけ', 'さるのこしかけ', 'sarunokosikake'],
        ['三時のおやつ', 'さんじのおやつ', 'sanjinooyatu'],
        ['酸素', 'さんそ', 'sanso'],
        ['三段跳び', 'さんだんとび', 'sandantobi'],
        ['サンマ', 'さんま', 'sanma'],
        //し行
        ['試合速報', 'しあいそくほう', 'siaisokuhou'],
        ['シーラカンス', 'しーらかんす', 'si-rakansu'],
        ['時価', 'じか', 'jika'],
        ['時間がない', 'じかんがない', 'jikanganai'],
        ['四季', 'しき', 'siki'],
        ['四季折々', 'しきおりおり', 'sikioriori'],
        ['指揮者', 'しきしゃ', 'sikisha'],
        ['ジグソーパズル', 'じぐそーぱずる', 'jiguso-pazuru'],
        ['シクラメン', 'しくらめん', 'sikuramen'],
        ['資源', 'しげん', 'sigen'],
        ['死後の世界', 'しごのせかい', 'sigonosekai'],
        ['シジミ', 'しじみ', 'sijimi'],
        ['ししゃも', 'ししゃも', 'sishamo'],
        ['尻尾', 'しっぽ', 'sippo'],
        ['質問事項', 'しつもんじこう', 'situmonjikou'],
        ['死なばもろとも', 'しなばもろとも', 'sinabamorotomo'],
        ['始発列車', 'しはつれっしゃ', 'sihaturessha'],
        ['姉妹', 'しまい', 'simai'],
        ['シマウマ', 'しまうま', 'simauma'],
        ['シャーベット', 'しゃーべっと', 'sha-betto'],
        ['じゃあまたね', 'じゃあまたね', 'jaamatane'],
        ['シャッター', 'しゃったー', 'shatta-'],
        ['シャベル', 'しゃべる', 'shaberu'],
        ['シャボン玉', 'しゃぼんだま', 'shabondama'],
        ['ジャングル', 'じゃんぐる', 'janguru'],
        ['ジャングルジム', 'じゃんぐるじむ', 'jangurujimu'],
        ['じゃんけんポン', 'じゃんけんぽん', 'jankenpon'],
        ['シャンパン', 'しゃんぱん', 'shanpan'],
        ['手裏剣', 'しゅりけん', 'shuriken'],
        ['春分の日', 'しゅんぶんのひ', 'shunbunnohi'],
        ['小宇宙', 'しょううちゅう', 'shouutyuu'],
        ['消火器', 'しょうかき', 'shoukaki'],
        ['少林寺', 'しょうりんじ', 'shourinji'],
        ['ジョーク', 'じょーく', 'jo-ku'],
        ['ショートケーキ', 'しょーとけーき', 'sho-toke-ki'],
        ['書道', 'しょどう', 'shodou'],
        ['支離滅裂', 'しりめつれつ', 'sirimeturetu'],
        ['城', 'しろ', 'siro'],
        ['白い粉', 'しろいこな', 'siroikona'],
        ['深海', 'しんかい', 'sinkai'],
        ['深海魚', 'しんかいぎょ', 'sinkaigyo'],
        ['人生', 'じんせい', 'jinsei'],
        ['身長', 'しんちょう', 'sintyou'],
        ['新聞紙', 'しんぶんし', 'sinbunsi'],
        ['心理テスト', 'しんりてすと', 'sinritesuto'],
        //す行
        ['スイカ', 'すいか', 'suika'],
        ['スイカ割り', 'すいかわり', 'suikawari'],
        ['水彩画', 'すいさいが', 'suisaiga'],
        ['水族館', 'すいぞくかん', 'suizokukan'],
        ['スイッチを押す', 'すいっちをおす', 'suittiwoosu'],
        ['水平線', 'すいへいせん', 'suiheisen'],
        ['ズーム', 'ずーむ', 'zu-mu'],
        ['スカイツリー', 'すかいつりー', 'sukaituri-'],
        ['スキー', 'すきー', 'suki-'],
        ['スキヤキ', 'すきやき', 'sukiyaki'],
        ['図形', 'ずけい', 'zukei'],
        ['スケート', 'すけーと', 'suke-to'],
        ['スケッチブック', 'すけっちぶっく', 'sukettibukku'],
        ['スコップ', 'すこっぷ', 'sukoppu'],
        ['寿司', 'すし', 'susi'],
        ['鈴虫', 'すずむし', 'suzumusi'],
        ['スズメ', 'すずめ', 'suzume'],
        ['スズメの涙', 'すずめのなみだ', 'suzumenonamida'],
        ['頭突き', 'ずつき', 'zutuki'],
        ['ストッキング', 'すとっきんぐ', 'sutokkingu'],
        ['ストライク', 'すとらいく', 'sutoraiku'],
        ['ストレート', 'すとれーと', 'sutore-to'],
        ['砂', 'すな', 'suna'],
        ['砂時計', 'すなどけい', 'sunadokei'],
        ['ズボン', 'ずぼん', 'zubon'],
        ['スマートフォン', 'すまーとふぉん', 'suma-tofon'],
        ['スライム', 'すらいむ', 'suraimu'],
        ['スルメイカ', 'するめいか', 'surumeika'],
        ['ズワイガニ', 'ずわいがに', 'zuwaigani'],
        //せ行
        ['世紀末', 'せいきまつ', 'seikimatu'],
        ['星座占い', 'せいざうらない', 'seizauranai'],
        ['成人の日', 'せいじんのひ', 'seijinnohi'],
        ['世界', 'せかい', 'sekai'],
        ['世界地図', 'せかいちず', 'sekaitizu'],
        ['席', 'せき', 'seki'],
        ['石油ストーブ', 'せきゆすとーぶ', 'sekiyusuto-bu'],
        ['絶滅の危機', 'ぜつめつのきき', 'zetumetunokiki'],
        ['セミ', 'せみ', 'semi'],
        ['ゼリー', 'ぜりー', 'zeri-'],
        ['ゼロ', 'ぜろ', 'zero'],
        ['線香花火', 'せんこうはなび', 'senkouhanabi'],
        ['染色体', 'せんしょくたい', 'senshokutai'],
        ['全体', 'ぜんたい', 'zentai'],
        ['銭湯', 'せんとう', 'sentou'],
        ['専門店', 'せんもんてん', 'senmonten'],
        //そ行
        ['象', 'ぞう', 'zou'],
        ['掃除機', 'そうじき', 'soujiki'],
        ['ゾウリムシ', 'ぞうりむし', 'zourimusi'],
        ['ソーセージ', 'そーせーじ', 'so-se-ji'],
        ['属性', 'ぞくせい', 'zokusei'],
        ['底なし沼', 'そこなしぬま', 'sokonasinuma'],
        ['素数', 'そすう', 'sosuu'],
        ['卒業式', 'そつぎょうしき', 'sotugyousiki'],
        ['ソプラノ', 'そぷらの', 'sopurano'],
        ['空の王者', 'そらのおうじゃ', 'soranoouja'],
        ['ソリ', 'そり', 'sori'],
        ['ソリティア', 'そりてぃあ', 'sorithia'],
        ['ゾンビ', 'ぞんび', 'zonbi'],
        //た行
        ['ダーツ', 'だーつ', 'da-tu'],
        ['タイ', 'たい', 'tai'],
        ['体温計', 'たいおんけい', 'taionkei'],
        ['大河ドラマ', 'たいがどらま', 'taigadorama'],
        ['大根', 'だいこん', 'daikon'],
        ['体重', 'たいじゅう', 'taijuu'],
        ['体操服', 'たいそうふく', 'taisoufuku'],
        ['大都会', 'だいとかい', 'daitokai'],
        ['体内時計', 'たいないどけい', 'tainaidokei'],
        ['ダイナマイト', 'だいなまいと', 'dainamaito'],
        ['大人気', 'だいにんき', 'daininki'],
        ['タイピング', 'たいぴんぐ', 'taipingu'],
        ['台風', 'たいふう', 'taifuu'],
        ['タイマー', 'たいまー', 'taima-'],
        ['タイムカード', 'たいむかーど', 'taimuka-do'],
        ['ダイヤ', 'だいや', 'daiya'],
        ['駄菓子', 'だがし', 'dagasi'],
        ['宝の地図', 'たからのちず', 'takaranotizu'],
        ['タクシー', 'たくしー', 'takusi-'],
        ['竹', 'たけ', 'take'],
        ['タコ', 'たこ', 'tako'],
        ['たこ焼き', 'たこやき', 'takoyaki'],
        ['助けてー！', 'たすけてー！', 'tasukete-!'],
        ['立ち読み', 'たちよみ', 'tatiyomi'],
        ['卓球', 'たっきゅう', 'takkyuu'],
        ['宅急便', 'たっきゅうびん', 'takkyuubin'],
        ['ダブルクリック', 'だぶるくりっく', 'daburukurikku'],
        ['タマ', 'たま', 'tama'],
        ['玉子焼き', 'たまごやき', 'tamagoyaki'],
        ['タラバガニ', 'たらばがに', 'tarabagani'],
        ['誰？', 'だれ？', 'dare?'],
        ['短歌', 'たんか', 'tanka'],
        ['誕生日', 'たんじょうび', 'tanjoubi'],
        ['たんぽぽ', 'たんぽぽ', 'tanpopo'],
        //ち行	
        ['チーズケーキ', 'ちーずけーき', 'ti-zuke-ki'],
        ['知恵', 'ちえ', 'tie'],
        ['チェックメイト', 'ちぇっくめいと', 'tyekkumeito'],
        ['地下', 'ちか', 'tika'],
        ['地球', 'ちきゅう', 'tikyuu'],
        ['チキンカレー', 'ちきんかれー', 'tikinkare-'],
        ['父の日', 'ちちのひ', 'titinohi'],
        ['地平線', 'ちへいせん', 'tiheisen'],
        ['チャーハン', 'ちゃーはん', 'tya-han'],
        ['チャイム', 'ちゃいむ', 'tyaimu'],
        ['茶碗蒸し', 'ちゃわんむし', 'tyawanmusi'],
        ['中古車', 'ちゅうこしゃ', 'tyuukosha'],
        ['中トロ', 'ちゅうとろ', 'tyuutoro'],
        ['長蛇の列', 'ちょうだのれつ', 'tyoudanoretu'],
        ['ちょうちょ', 'ちょうちょ', 'tyoutyo'],
        ['貯金', 'ちょきん', 'tyokin'],
        ['貯金箱', 'ちょきんばこ', 'tyokinbako'],
        ['チョコレート', 'ちょこれーと', 'tyokore-to'],
        ['ちょんまげ', 'ちょんまげ', 'tyonmage'],
        ['ちらしズシ', 'ちらしずし', 'tirasizusi'],
        ['地理', 'ちり', 'tiri'],
        ['珍獣', 'ちんじゅう', 'tinjuu'],
        //つ行	
        ['ツイッター', 'ついったー', 'tuitta-'],
        ['使いまわし', 'つかいまわし', 'tukaimawasi'],
        ['月', 'つき', 'tuki'],
        ['机', 'つくえ', 'tukue'],
        ['つけまつげ', 'つけまつげ', 'tukematuge'],
        ['つつじ', 'つつじ', 'tutuji'],
        ['つぶあん', 'つぶあん', 'tubuan'],
        ['つぶらな瞳', 'つぶらなひとみ', 'tuburanahitomi'],
        ['釣り', 'つり', 'turi'],
        ['ツル', 'つる', 'turu'],
        ['鶴と亀', 'つるとかめ', 'turutokame'],
        ['ツンデレ', 'つんでれ', 'tundere'],
        //て行		
        ['ディスプレイ', 'でぃすぷれい', 'dhisupurei'],
        ['ティッシュ', 'てぃっしゅ', 'thisshu'],
        ['ティラミス', 'てぃらみす', 'thiramisu'],
        ['テーブル', 'てーぶる', 'te-buru'],
        ['でこピン', 'でこぴん', 'dekopin'],
        ['デザイナー', 'でざいなー', 'dezaina-'],
        ['デジタルカメラ', 'でじたるかめら', 'dejitarukamera'],
        ['鉄火巻き', 'てっかまき', 'tekkamaki'],
        ['鉄道', 'てつどう', 'tetudou'],
        ['テディベア', 'てでぃべあ', 'tedhibea'],
        ['寺', 'てら', 'tera'],
        ['テレビ番組', 'てれびばんぐみ', 'terebibangumi'],
        ['天気予報', 'てんきよほう', 'tenkiyohou'],
        ['電子辞書', 'でんしじしょ', 'densijisho'],
        ['電話', 'でんわ', 'denwa'],
        ['電話帳', 'でんわちょう', 'denwatyou'],
        ['電話番号', 'でんわばんごう', 'denwabangou'],
        //と行
        ['ドア', 'どあ', 'doa'],
        ['トイプードル', 'といぷーどる', 'toipu-doru'],
        ['東京都', 'とうきょうと', 'toukyouto'],
        ['同窓会', 'どうそうかい', 'dousoukai'],
        ['動物園', 'どうぶつえん', 'doubutuen'],
        ['道路工事', 'どうろこうじ', 'dourokouji'],
        ['ドーナツ', 'どーなつ', 'do-natu'],
        ['ト音記号', 'とおんきごう', 'toonkigou'],
        ['毒', 'どく', 'doku'],
        ['どこ行くの？', 'どこいくの？', 'dokoikuno?'],
        ['都市伝説', 'としでんせつ', 'tosidensetu'],
        ['図書委員', 'としょいいん', 'toshoiin'],
        ['どじょうすくい', 'どじょうすくい', 'dojousukui'],
        ['都道府県', 'とどうふけん', 'todoufuken'],
        ['飛び出す絵本', 'とびだすえほん', 'tobidasuehon'],
        ['トマト', 'とまと', 'tomato'],
        ['友達', 'ともだち', 'tomodati'],
        ['トラ', 'とら', 'tora'],
        ['ドライヤー', 'どらいやー', 'doraiya-'],
        ['トラクター', 'とらくたー', 'torakuta-'],
        ['トランペット', 'とらんぺっと', 'toranpetto'],
        ['鳥', 'とり', 'tori'],
        ['どんぐり', 'どんぐり', 'donguri'],
        ['どんでん返し', 'どんでんがえし', 'dondengaesi'],
        ['トンネル', 'とんねる', 'tonneru'],
        ['トンボ', 'とんぼ', 'tonbo'],
        //な行
        ['黒酢', 'くろず', 'kurozu'],
        ['黒酢', 'くろず', 'kurozu'],
        ['黒酢', 'くろず', 'kurozu'],
        ['黒酢', 'くろず', 'kurozu'],
        // 内野安打	ないやあんだ	naiyaanda
        // 長靴	ながぐつ	nagagutu
        // 流しそうめん	ながしそうめん	nagasisoumexn
        // ナス	なす	nasu
        // 謎の人物	なぞのじんぶつ	nazonojinbutu
        // 夏	なつ	natu
        // 納豆菌	なっとうきん	nattoukixn
        // 夏祭り	なつまつり	natumaturi
        // 七色の虹	なないろのにじ	nanairononiji
        // 名無しさん	ななしさん	nanasisaxn
        // 鍋奉行	なべぶぎょう	nabebugyou
        // ナマケモノ	なまけもの	namakemono
        // ナマズ	なまず	namazu
        // 生ハム	なまはむ	namahamu
        // 波	なみ	nami
        // なめこ	なめこ	nameko

        //に行
        ['黒酢', 'くろず', 'kurozu'],
        // 西	にし	nisi
        // 日曜大工	にちようだいく	nitiyoudaiku
        // 日記	にっき	nikki
        // 日本地図	にほんちず	nihontizu
        // 日本の心	にほんのこころ	nihoxnnokokoro
        // ニャー	にゃー	nya-
        // 入学式	にゅうがくしき	nyuugakusiki
        // 庭	にわ	niwa
        // にわか雨	にわかあめ	niwakaame
        // ニワトリ	にわとり	niwatori
        // 人気タレント	にんきたれんと	ninkitarento
        // 人魚姫	にんぎょひめ	ningyohime
        // 人間	にんげん	ningexn
        // 忍者	にんじゃ	ninja

        //ぬ行
        ['黒酢', 'くろず', 'kurozu'],
        // ぬいぐるみ	ぬいぐるみ	nuigurumi
        // ぬか喜び	ぬかよろこび	nukayorokobi
        // 抜き打ちテスト	ぬきうちてすと	nukiutitesuto
        // 盗み聞き	ぬすみぎき	nusumigiki
        // ぬるま湯	ぬるまゆ	nurumayu
        // ぬるめのお風呂	ぬるめのおふろ	nurumenoofuro

        //ね行
        ['黒酢', 'くろず', 'kurozu'],
        // ネイルアート	ねいるあーと	neirua-to
        // ネガティブ	ねがてぃぶ	negathibu
        // ネギ	ねぎ	negi
        // ネクタイ	ねくたい	nekutai
        // 猫	ねこ	neko
        // 猫じゃらし	ねこじゃらし	nekojarasi
        // 寝言	ねごと	negoto
        // 猫に小判	ねこにこばん	nekonikobaxn
        // 猫パンチ	ねこぱんち	nekopanti
        // 寝正月	ねしょうがつ	neshougatu
        // ネタ	ねた	neta
        // ネタバレ	ねたばれ	netabare
        // 寝違えました	ねちがえました	netigaemasita
        // 熱帯魚	ねったいぎょ	nettaigyo
        // 熱帯夜	ねったいや	nettaiya
        // 寝耳に水	ねみみにみず	nemiminimizu
        // 眠り姫	ねむりひめ	nemurihime
        // 寝る子は育つ	ねるこはそだつ	nerukohasodatu
        // 年末年始	ねんまつねんし	nenmatunensi

        //の行
        ['黒酢', 'くろず', 'kurozu'],
        // ノアの箱舟	のあのはこぶね	noanohakobune
        // 脳科学	のうかがく	noukagaku
        // ノート	のーと	no-to
        // 登り坂	のぼりざか	noborizaka
        // のらりくらり	のらりくらり	norarikurari
        // ノリ	のり	nori
        // ノルマ達成	のるまたっせい	norumatassei
        // のんびりする	のんびりする	nonbirisuru

        //は行
        ['黒酢', 'くろず', 'kurozu'],
        // バーゲンセール	ばーげんせーる	ba-gense-ru
        // ハーモニカ	はーもにか	ha-monika
        // 梅雨前線	ばいうぜんせん	baiuzensexn
        // バイオリン	ばいおりん	baiorixn
        // 背水の陣	はいすいのじん	haisuinojixn
        // パイナップル	ぱいなっぷる	painappuru
        // バウムクーヘン	ばうむくーへん	baumuku-hexn
        // 白紙に戻す	はくしにもどす	hakusinimodosu
        // 拍手	はくしゅ	hakushu
        // バケツ	ばけつ	baketu
        // 走り高跳び	はしりたかとび	hasiritakatobi
        // バス	ばす	basu
        // 蜂蜜	はちみつ	hatimitu
        // ハツカネズミ	はつかねずみ	hatukanezumi
        // バッタ	ばった	batta
        // バッター	ばったー	batta-
        // バット	ばっと	batto
        // ハッピーエンド	はっぴーえんど	happi-endo
        // 初日の出	はつひので	hatuhinode
        // 初夢	はつゆめ	hatuyume
        // 花	はな	hana
        // 鼻毛でてるよ	はなげでてるよ	hanagedeteruyo
        // バナナ	ばなな	banana
        // 花火	はなび	hanabi
        // 花吹雪	はなふぶき	hanafubuki
        // 花より団子	はなよりだんご	hanayoridango
        // パパ	ぱぱ	papa
        // 母の日	ははのひ	hahanohi
        // ハマチ	はまち	hamati
        // ハム	はむ	hamu
        // ハムスター	はむすたー	hamusuta-
        // バラの花束	ばらのはなたば	baranohanataba
        // ハリケーン	はりけーん	harike-xn
        // 春	はる	haru
        // 春の嵐	はるのあらし	harunoarasi
        // 春の小川	はるのおがわ	harunoogawa
        // ハレー彗星	はれーすいせい	hare-suisei
        // パン	ぱん	paxn
        // 反省	はんせい	hansei
        // パンダ	ぱんだ	panda
        // パンツ	ぱんつ	pantu
        // パンドラの箱	ぱんどらのはこ	pandoranohako
        // バンパー	ばんぱー	banpa-

        //ひ行
        ['黒酢', 'くろず', 'kurozu'],
        // ピアノ	ぴあの	piano
        // ビール	びーる	bi-ru
        // 控え室	ひかえしつ	hikaesitu
        // 秘境	ひきょう	hikyou
        // ピザ	ぴざ	piza
        // ひざ小僧	ひざこぞう	hizakozou
        // 微笑	びしょう	bishou
        // 美少年	びしょうねん	bishounexn
        // 左クリック	ひだりくりっく	hidarikurikku
        // 引越しそば	ひっこしそば	hikkosisoba
        // 引っ越しました	ひっこしました	hikkosimasita
        // 必死	ひっし	hissi
        // ヒツジ	ひつじ	hituji
        // 羊の群れ	ひつじのむれ	hitujinomure
        // ぴったりサイズ	ぴったりさいず	pittarisaizu
        // ヒッチハイク	ひっちはいく	hittihaiku
        // ひっぱりだこ	ひっぱりだこ	hipparidako
        // ひなあられ	ひなあられ	hinaarare
        // ひなたぼっこ	ひなたぼっこ	hinatabokko
        // 美男美女	びなんびじょ	binanbijo
        // 火の用心	ひのようじん	hinoyoujixn
        // ヒマワリの種	ひまわりのたね	himawarinotane
        // 秘密	ひみつ	himitu
        // 氷河期	ひょうがき	hyougaki
        // ひよこピヨピヨ	ひよこぴよぴよ	hiyokopiyopiyo
        // ピラミッド	ぴらみっど	piramiddo
        // ビリヤード	びりやーど	biriya-do
        // 昼	ひる	hiru
        // ピンチ	ぴんち	pinti
        // ピンポン	ぴんぽん	pinpoxn

        //ふ行
        ['黒酢', 'くろず', 'kurozu'],
        // ファイル	ふぁいる	fairu
        // ファンクラブ	ふぁんくらぶ	fankurabu
        // フィルター	ふぃるたー	firuta-
        // フィルム	ふぃるむ	firumu
        // ブーツ	ぶーつ	bu-tu
        // 風鈴	ふうりん	fuurixn
        // 部下	ぶか	buka
        // 武器	ぶき	buki
        // 福神漬け	ふくじんづけ	fukujinzuke
        // 富士山	ふじさん	fujisaxn
        // 冬	ふゆ	fuyu
        // 武勇伝	ぶゆうでん	buyuudexn
        // ブラックホール	ぶらっくほーる	burakkuho-ru
        // プラネタリウム	ぷらねたりうむ	puranetariumu
        // フランスパン	ふらんすぱん	furansupaxn
        // ブランド	ぶらんど	burando
        // プリン	ぷりん	purixn
        // ブルーベリー	ぶるーべりー	buru-beri-
        // ブルドッグ	ぶるどっぐ	burudoggu
        // 古本屋	ふるほんや	furuhoxnya
        // フルマラソン	ふるまらそん	furumarasoxn
        // ブロック崩し	ぶろっくくずし	burokkukuzusi
        // ブロッコリー	ぶろっこりー	burokkori-
        // プロの技	ぷろのわざ	puronowaza

        //へ行
        ['黒酢', 'くろず', 'kurozu'],
        // 平成	へいせい	heisei
        // ペットボトル	ぺっとぼとる	pettobotoru
        // ぺペロンチーノ	ぺぺろんちーの	peperonti-no
        // 部屋の中	へやのなか	heyanonaka
        // ヘリコプター	へりこぷたー	herikoputa-
        // ヘルメット	へるめっと	herumetto
        // ペンギン	ぺんぎん	pengixn
        // 返事がない	へんじがない	henjiganai
        // 変身	へんしん	hensixn
        // 返信不要	へんしんふよう	hensinfuyou
        // ペンタゴン	ぺんたごん	pentagoxn
        // 便利ツール	べんりつーる	benritu-ru

        //ほ行
        ['黒酢', 'くろず', 'kurozu'],
        // ポイント	ぽいんと	pointo
        // ホウセンカ	ほうせんか	housenka
        // 防犯ブザー	ぼうはんぶざー	bouhanbuza-
        // ボウリング	ぼうりんぐ	bouringu
        // ボーナス	ぼーなす	bo-nasu
        // ボール	ぼーる	bo-ru
        // 募金	ぼきん	bokixn
        // 木刀	ぼくとう	bokutou
        // 北斗七星	ほくとしちせい	hokutositisei
        // 星	ほし	hosi
        // 星がきれい	ほしがきれい	hosigakirei
        // 星空	ほしぞら	hosizora
        // ホタテ	ほたて	hotate
        // ボタン海老	ぼたんえび	botanebi
        // ポチ	ぽち	poti
        // ポップコーン	ぽっぷこーん	poppuko-xn
        // ポテトサラダ	ぽてとさらだ	potetosarada
        // 骨	ほね	hone
        // ホワイトボード	ほわいとぼーど	howaitobo-do
        // 本気の目	ほんきのめ	honkinome
        // 本棚の裏	ほんだなのうら	hondananoura

        //ま行
        ['黒酢', 'くろず', 'kurozu'],
        // マイナスイオン	まいなすいおん	mainasuioxn
        // マウス	まうす	mausu
        // マグロ	まぐろ	maguro
        // マジック	まじっく	majikku
        // まだまだだな	まだまだだな	madamadadana
        // 町	まち	mati
        // 真っ白な雪	まっしろなゆき	massironayuki
        // マツタケご飯	まつたけごはん	matutakegohaxn
        // マッチ	まっち	matti
        // 抹茶プリン	まっちゃぷりん	mattyapurixn
        // マップ	まっぷ	mappu
        // 真夏の夜	まなつのよる	manatunoyoru
        // 招き猫	まねきねこ	manekineko
        // 魔法使い	まほうつかい	mahoutukai
        // ママ	まま	mama
        // 豆まき	まめまき	mamemaki
        // マヨネーズ	まよねーず	mayone-zu
        // マリンスポーツ	まりんすぽーつ	marinsupo-tu
        // 万華鏡	まんげきょう	mangekyou
        // マンホール	まんほーる	manho-ru

        //み行
        ['黒酢', 'くろず', 'kurozu'],
        // 三日月	みかづき	mikaduki
        // ミカン	みかん	mikaxn
        // 右クリック	みぎくりっく	migikurikku
        // ミクロの世界	みくろのせかい	mikuronosekai
        // ミケ	みけ	mike
        // ミジンコ	みじんこ	mijinko
        // 水しぶき	みずしぶき	mizusibuki
        // 道	みち	miti
        // 道に迷う	みちにまよう	mitinimayou
        // ミニチュア	みにちゅあ	minityua
        // 耳	みみ	mimi
        // ミルク	みるく	miruku

        //む行
        ['黒酢', 'くろず', 'kurozu'],
        // ムエタイ	むえたい	muetai
        // 昔話	むかしばなし	mukasibanasi
        // 麦茶	むぎちゃ	mugitya
        // 麦わら帽子	むぎわらぼうし	mugiwarabousi
        // 無限ループ	むげんるーぷ	mugenru-pu
        // 虫	むし	musi
        // 虫歯	むしば	musiba
        // 虫メガネ	むしめがね	musimegane
        // 無人島	むじんとう	mujintou
        // 無茶苦茶	むちゃくちゃ	mutyakutya
        // 村	むら	mura
        // 無理をしない	むりをしない	muriwosinai

        //め行
        ['黒酢', 'くろず', 'kurozu'],
        // 名刺	めいし	meisi
        // 迷路	めいろ	meiro
        // メールアドレス	めーるあどれす	me-ruadoresu
        // 目隠し	めかくし	mekakusi
        // 目からウロコ	めからうろこ	mekarauroko
        // メジャーリーグ	めじゃーりーぐ	meja-ri-gu
        // メダカ	めだか	medaka
        // 目玉焼き	めだまやき	medamayaki
        // メトロノーム	めとろのーむ	metorono-mu
        // メロン	めろん	meroxn
        // メロンソーダ	めろんそーだ	meronso-da
        // 面積	めんせき	menseki
        // メンチカツ	めんちかつ	mentikatu

        //も行
        ['黒酢', 'くろず', 'kurozu'],
        // モアイ像	もあいぞう	moaizou
        // モーターボート	もーたーぼーと	mo-ta-bo-to
        // 目標	もくひょう	mokuhyou
        // モグラ	もぐら	mogura
        // モデル	もでる	moderu
        // モノクロ	ものくろ	monokuro
        // モモ	もも	momo
        // 森	もり	mori
        // モンスター	もんすたー	monsuta-
        // 問題点	もんだいてん	mondaitexn
        // モンブラン	もんぶらん	monburaxn

        //や行
        ['黒酢', 'くろず', 'kurozu'],
        // 焼き魚	やきざかな	yakizakana
        // 野球	やきゅう	yakyuu
        // 焼け石に水	やけいしにみず	yakeisinimizu
        // 野菜	やさい	yasai
        // ヤシの木	やしのき	yasinoki
        // 矢印	やじるし	yajirusi
        // 休み時間	やすみじかん	yasumijikaxn
        // やっぱり無理	やっぱりむり	yapparimuri
        // 屋根	やね	yane
        // ヤマタノオロチ	やまたのおろち	yamatanooroti
        // 山の神	やまのかみ	yamanokami
        // ヤモリ	やもり	yamori

        //ゆ行
        ['黒酢', 'くろず', 'kurozu'],
        // 遊園地	ゆうえんち	yuuenti
        // 勇気	ゆうき	yuuki
        // 幽体離脱	ゆうたいりだつ	yuutairidatu
        // 夕日	ゆうひ	yuuhi
        // 郵便局	ゆうびんきょく	yuubinkyoku
        // 夕焼け	ゆうやけ	yuuyake
        // 雪	ゆき	yuki
        // 雪だるま	ゆきだるま	yukidaruma
        // 湯たんぽ	ゆたんぽ	yutanpo
        // ユニバーサル	ゆにばーさる	yuniba-saru
        // 弓	ゆみ	yumi

        //よ行
        ['黒酢', 'くろず', 'kurozu'],
        // 妖怪	ようかい	youkai
        // 妖精の国	ようせいのくに	youseinokuni
        // ヨーグルト	よーぐると	yo-guruto
        // ヨーヨー	よーよー	yo-yo-
        // ヨガのポーズ	よがのぽーず	yoganopo-zu
        // 四字熟語	よじじゅくご	yojijukugo
        // 予知	よち	yoti
        // ヨット	よっと	yotto
        // 酔っ払い	よっぱらい	yopparai
        // 夜中	よなか	yonaka
        // 夜	よる	yoru


        //ら行
        ['黒酢', 'くろず', 'kurozu'],
        // ラーメン	らーめん	ra-mexn
        // ラーメンライス	らーめんらいす	ra-menraisu
        // ライオン	らいおん	raioxn
        // ライトアップ	らいとあっぷ	raitoappu
        // ライム	らいむ	raimu
        // ラストスパート	らすとすぱーと	rasutosupa-to
        // ラッコ	らっこ	rakko
        // ラフレシア	らふれしあ	rafuresia
        // ランキング	らんきんぐ	rankingu
        // ランドセル	らんどせる	randoseru

        //り行
        ['黒酢', 'くろず', 'kurozu'],
        // リーダー	りーだー	ri-da-
        // 理科の実験	りかのじっけん	rikanojikkexn
        // 理科のテスト	りかのてすと	rikanotesuto
        // リコーダー	りこーだー	riko-da-
        // リサイクル	りさいくる	risaikuru
        // リップクリーム	りっぷくりーむ	rippukuri-mu
        // リボン	りぼん	riboxn
        // 留学生	りゅうがくせい	ryuugakusei
        // りんご	りんご	ringo
        // りんご飴	りんごあめ	ringoame

        //る行
        ['黒酢', 'くろず', 'kurozu'],
        // ルームサービス	るーむさーびす	ru-musa-bisu
        // ルールブック	るーるぶっく	ru-rubukku
        // ルーレット	るーれっと	ru-retto
        // ルビー	るびー	rubi-
        // ルビーの指輪	るびーのゆびわ	rubi-noyubiwa


        //れ行
        ['黒酢', 'くろず', 'kurozu'],
        // 冷蔵庫	れいぞうこ	reizouko
        // 令和	れいわ	reiwa
        // レインコート	れいんこーと	reinko-to
        // レタス	れたす	retasu
        // レベルアップ	れべるあっぷ	reberuappu
        // 練習	れんしゅう	renshuu
        // レンズ	れんず	renzu

        //ろ行
        ['黒酢', 'くろず', 'kurozu'],
        // ろうそく	ろうそく	rousoku
        // ローストチキン	ろーすとちきん	ro-sutotikixn
        // ロールキャベツ	ろーるきゃべつ	ro-rukyabetu
        // ロールケーキ	ろーるけーき	ro-ruke-ki
        // ログイン	ろぐいん	roguixn
        // ロケットパンチ	ろけっとぱんち	rokettopanti
        // 路上ライブ	ろじょうらいぶ	rojouraibu
        // ロッカールーム	ろっかーるーむ	rokka-ru-mu
        // ロック	ろっく	rokku
        // 六本木	ろっぽんぎ	roppongi
        // ロブスター	ろぶすたー	robusuta-
        // ロングパス	ろんぐぱす	rongupasu

        //わ行
        ['黒酢', 'くろず', 'kurozu'],
        // わー！	わー！	wa-!
        // わーい	わーい	wa-i
        // ワイシャツ	わいしゃつ	waishatu
        // ワイングラス	わいんぐらす	waingurasu
        // 和菓子	わがし	wagasi
        // ワサビ	わさび	wasabi
        // 綿菓子	わたがし	watagasi
        // 綿ボコリ	わたぼこり	watabokori
        // ワニ	わに	wani
        // 悪知恵	わるぢえ	warudie
        // ワンタンメン	わんたんめん	wantanmexn
    ];

    //タイピング文字セット関数
    function setWord() {
        let row;
        row = words.splice(Math.floor(Math.random() * words.length), 1)[0];//ランダムにwordsから1行選択
        wordKa = row[0];//漢字の部分
        wordJp = row[1];//日本語の部分
        word = row[2];//ローマ字の部分
        targetKaLabel.textContent = wordKa;
        targetJaLabel.textContent = wordJp;
        targetLabel.textContent = word;
        words.push(row);//選択した１行を再投入
    }

    //タイピング文字判定関数
    function key(e) {
        if (e.key === word[loc]) {

            //ワード一文字合うごとにcss付与
            enemyImg.classList.add('damage');
            //0.1秒後にcss削除
            setTimeout(function () {
                enemyImg.classList.remove('damage');
            }, 100); // 0.1秒後にCSSクラスを削除

            // 正解した文字を _ に変換させる変数＋1
            loc++;
            // 正解した文字を _ に変換させる
            targetLabel.textContent = '_'.repeat(loc) + word.substring(loc);

            //敵ステータス
            enemyHpm = enemyHpm - atk;
            enemyHpLabel.textContent = "HP:" + enemyHpm;

            //一文字合うたびにログ関数実行
            log(atk, true);

            //プレイヤーの攻撃サウンド関数実行
            playerAtkSound();

            if (loc === word.length) {// locが問題の文字列数と一致したら
                //タイピングワードセット
                setWord();
                // 正解した文字を _ に変換させるを0にする
                loc = 0;
            }

            //敵の体力が0以下なら
            if (enemyHpm <= 0) {

                //画像切り替え関数実行
                imgchange();

                //新しい敵のAtk設定
                enemyAtk = Math.ceil(enemyAtk * enemyatk);
                enemyAtkLabel.textContent = "ATK:" + enemyAtk;

                //新しい敵のhp設定
                enemyHp = Math.ceil(enemyHp * enemyhp);
                enemyHpm = enemyHp;
                enemyHpLabel.textContent = "HP:" + enemyHp;

                //敵を倒したらexmを-5して代入
                exm = exm - 5;
                //新しいexmを表示
                exLabel.textContent = "Ex:" + exm;
                //ステータス更新
                keepvalue(lv, exm, hp, atk);
            }

            //exmが0以下になったら
            if (exm <= 0) {
                //レベル1プラス
                lv++;
                //hpを1.5倍にする
                hp = Math.ceil(hp * myhp);
                //atkを1.5倍にする
                atk = Math.ceil(atk * myatk);
                //exを1.5倍にする
                ex = Math.ceil(ex * myex);

                //1.5倍した値をexmの新しい値にする
                exm = ex;
                //1.5倍した値をhpmの新しい値にする
                hpm = hp;

                //新しい値を表示
                lvLabel.textContent = "Lv:" + lv;
                hppLabel.textContent = "HP:" + hp;
                atkLabel.textContent = "ATK:" + atk;
                exLabel.textContent = "Ex:" + ex;

                //新しい値をローカルストレージに更新
                keepvalue(lv, ex, hp, atk);
            }
        }
    }

    //敵画像切り替え関数
    function imgchange() {
        imageNo++; // 次の画像へのインデックス

        if (imageNo >= enemyImgs.length) {
            // インデックスが配列の範囲外になった場合は最初の画像に戻す
            imageNo = 0;
            window.location.href = 'end.html';
        }
        enemyImg.src = enemyImgs[imageNo]; // 画像の切り替え
    }

    //タイマー関数
    function Timer() {
        //タイマー変数
        const timerLabel = document.getElementById('timer');
        let startTime = Date.now();

        // タイマーを更新する関数
        function updateTimer() {
            const aTime = Date.now();
            const bTime = aTime - startTime;
            // ミリ秒を秒に変換し、整数部分を取得
            const seconds = Math.floor(bTime / 1000);
            // タイマーを表示する
            timerLabel.textContent = seconds + '秒';

            //3秒毎にhpから敵の攻撃力分引く
            if (seconds % 3 === 0) {
                hpm = hpm - enemyAtk;
                hppLabel.textContent = "HP:" + hpm;

                //敵が攻撃する毎にcss付与
                mainbacLabel.classList.add('damage');
                //0.1秒後にcss削除
                setTimeout(function () {
                    mainbacLabel.classList.remove('damage');
                }, 100); // 0.1秒後にCSSクラスを削除

                //ログ表示
                log(enemyAtk, false);

                //敵の攻撃サウンド関数実行
                enemyAtkSound();

                //hpmが1以下になったら
                if (hpm <= 0) {
                    //レベルアップの時のhpをhpmに代入
                    hpm = hp;

                    //値をローカルストレージに保存
                    keepvalue(lv, exm, hp, atk);

                    //'gameover.html'に移動
                    window.location.href = 'gameover.html';
                }
            }
        }
        // 1秒ごとにタイマーを更新する
        setInterval(updateTimer, 1000)
    }

    //初期のステータス表示関数
    function firststatusdisplay() {
        //自分
        lvLabel.textContent = "Lv:" + lv;
        hppLabel.textContent = "HP:" + hp;
        atkLabel.textContent = "ATK:" + atk;
        exLabel.textContent = "Ex:" + ex;

        //敵
        enemyHpLabel.textContent = "HP:" + enemyHp;
        enemyAtkLabel.textContent = "ATK:" + enemyAtk;
    }

    //値をローカルストレージに保存する関数
    function keepvalue(lv, ex, hp, atk) {
        //自分のキャラオブジェクト作成
        const mycharaobj = { lv: lv, ex: ex, hp: hp, atk: atk }
        //自分のキャラオブジェクトを文字列に変更
        const mojimycharaobj = JSON.stringify(mycharaobj);
        //文字列のオブジェクトをローカルストレージに保存
        localStorage.setItem("mycharaobj", mojimycharaobj);
    }

    //ダメージログ関数
    function log(damage, playerAtk) {
        const logLabels = [
            document.getElementById('log1'),
            document.getElementById('log2'),
            document.getElementById('log3'),
            document.getElementById('log4'),
            document.getElementById('log5'),
            document.getElementById('log6'),
            document.getElementById('log7'),
            document.getElementById('log8'),
            document.getElementById('log9'),
            document.getElementById('log10'),
        ];

        // ログのシフト
        for (let i = logLabels.length - 1; i > 0; i--) {
            logLabels[i].textContent = logLabels[i - 1].textContent;
        }

        // 新しいログの追加
        if (playerAtk) {
            logLabels[0].textContent = "敵に" + damage + "ダメージ";
        } else {
            logLabels[0].textContent = "自分に" + damage + "ダメージ";
        }
    }

    //バックbgm
    function bacBgm() {
        const bgm = document.getElementById('bacBgm');
        // 音量を50%に設定
        bgm.volume = 0.1;
        //bgm再生
        bgm.play();
    }

    //プレイヤーの攻撃サウンド
    function playerAtkSound() {
        const pSound = document.getElementById('playerAtkSound');
        // 音量を50%に設定
        pSound.volume = 0.5;
        //サウンド一時停止
        pSound.pause();
        // 再生位置を先頭に戻す
        pSound.currentTime = 0;
        //サウンド再生
        pSound.play();
    }

    //敵の攻撃サウンド
    function enemyAtkSound() {
        const eSound = document.getElementById('enemyAtkSound');
        // 音量を50%に設定
        eSound.volume = 0.5;
        //サウンド一時停止
        eSound.pause();
        // 再生位置を先頭に戻す
        eSound.currentTime = 0;
        //サウンド再生
        eSound.play();
    }

    //ロードした時にbgm再生
    document.addEventListener('DOMContentLoaded', bacBgm);

    //ロードした時にワード関数実行
    document.addEventListener('DOMContentLoaded', setWord);

    //ロードした時にタイマー関数実行
    document.addEventListener('DOMContentLoaded', Timer);

    //ロードした時に初期ステータス表示関数実行
    document.addEventListener('DOMContentLoaded', firststatusdisplay);

    //キーを押した時に文字判定関数実行
    document.addEventListener('keydown', key);

    //キーが押されたとき
    document.addEventListener('keydown', function (event) {
        // キーがエスケープきーなら
        if (event.key === 'Escape') {
            //
            let endalert = confirm('スタート画面に戻りますか？');

            //confirmがtrueなら
            if (endalert === true) {
                //'start.html'に移動
                window.location.href = 'start.html';
            }
        }
    });


}
