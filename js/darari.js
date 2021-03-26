// Firebase オプション設定
var firebaseConfig = {
  apiKey: "AIzaSy" + XXXXXXXXXXXXXXXXXXX + "yAooK" + XXXXXXXXXXXX + "8nohpsI",
  authDomain: "n" + XX + "aseapp.com",
  databaseURL: "ht" + XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX + "o.com",
  projectId: "non" + XXXX + "7",
  storageBucket: "non" + XXXXXX + "pot.com",
  messagingSenderId: "988" + XXXXXXXXXXX + "8",
  appId: "1:9887" + X + "6d7aafa66cb"
};

// firebase 初期化
firebase.initializeApp(firebaseConfig);

// DB処理格納
let database = firebase.database();

// リロード判定
let reloaded = false;

// デバイスの種類を格納
let device = "";

// 訪問者数カウントドッドループ切断
let isVisitCountDotLoop = true;

// メイン処理
$(async function() {
  // 初期化処理
  Initialize();

  // 総訪問してくれた数表示
  await ShowVisitCount();
  
  // 訪問カウントアップ
  AddVisitCount();
});

// 初期化処理
function Initialize() {
  // リロードチェックを行う
  ChkReload();

  // デバイス種別を判定する
  SetDeviceKind();
}

// リロードチェック
function ChkReload() {
  if (Isset(window.sessionStorage.getItem("href")) && window.sessionStorage.getItem("href") == window.location.href) {
    reloaded = true;
  }
  window.sessionStorage.setItem("href", window.location.href);
};

// 値設定チェック
function Isset(value) {
  return (value !== null && value !== "" && value !== undefined);
}

// デバイスの種別を判定
function SetDeviceKind() {
  // ユーザーエージェントを取得
  let ua = window.navigator.userAgent;

  if (ua.indexOf("iPhone") != -1 ||
      ua.indexOf("iPod") != -1 ||
      (ua.indexOf("Android") != -1 && ua.indexOf("Mobile") != -1) ||
      ua.indexOf("iPad") != -1 ||
      ua.indexOf("Android") != -1) {
      device = "sp";
  }
  else {
      device = "pc";
  }
}

// 総訪問してくれた数表示
function ShowVisitCount() {
  return new Promise(resolve => {
    // 訪問者数カウントドッドアニメーション
    AnimationVisitCountDot();

    database.ref("DarariVisitCount").on("value", function(visitCount) {
      $("#visitCount").text(visitCount.val());

      // 訪問者数カウントドッド非表示
      HiddenVisitCountDot();
      isVisitCountDotLoop = false;

      resolve();
    });
  });
}

// 総訪問してくれた数カウントアップ
function AddVisitCount() {
  return new Promise(resolve => {
    // 遷移前情報参照
    let ref = window.document.referrer;

    // 遷移前画面が本サイト以外だった場合、処理実行
    if ((!Isset(ref) || (
            // 除外するホスト名
            ref.indexOf("ide.c9.io") == -1 &&
            ref.indexOf("preview.c9users.io") == -1 &&
            ref.indexOf("yururito.gradation.jp") == -1 &&
            ref.indexOf("localhost") == -1
          )) &&
        !reloaded) {

      // 開発環境の場合は、以降の処理を行わない
      if (window.location.hostname.indexOf("localhost") !== -1)
        return;
      
      // 訪問数カウントアップ
      database.ref("DarariVisitCount").set(parseInt($("#visitCount").text()) + 1);

      // 管理者へアクセスされた事を通知
      $(function(){
        $.post("./models/Api/LINE/LineNotify.php", {"accessMessage": device + "で DarariWorkingTalkCafe にアクセスがありました。"});
      });

    }

    resolve();
  });
}

// 訪問者数カウントドッドアニメーション
function AnimationVisitCountDot() {
  let dotCount = 1;
  setTimeout(async function() {
    while (true) {
      await ShowVisitCountDot(dotCount);
      dotCount++;

      if (dotCount > 3) {
        HiddenVisitCountDot();
        dotCount = 1;
      }

      if (!isVisitCountDotLoop)
        break;
    }
  }, 1);
}

// 訪問者数カウントドッド表示
function ShowVisitCountDot(dotCount) {
  return new Promise(resolve => {
    $("#visitCountDot_" + dotCount).fadeIn(100, function() {
      resolve();
    });
  });
}

// 訪問者数カウントドッド非表示
function HiddenVisitCountDot() {
  $("#visitCountDot_1").fadeOut(100);
  $("#visitCountDot_2").fadeOut(100);
  $("#visitCountDot_3").fadeOut(100);
}