<style>
  /* 共通部分 */
  body {
    background-color: #FDD6AB;
    overflow-y: auto;
  }
  #app {
    font-family: 'Jenkins v2.0', cursive;
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: inset 0 0 2px #777;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    box-shadow: none;
  }
  #cafeIcon {
    width: 60px;
    height: 60px;
    background-image: url('./assets/cup.png');
    background-size: cover;
    border-radius: 30px;
    position: fixed;
    top: 5%;
    right: 5%;
    animation: IconMove 1s ease-in-out 0s infinite alternate;
    box-shadow: 5px 5px #AF8447;
  }
  /* #header {
    width: 98%;
    height: 200px;
    border: solid 5px #704F38;
    background-image: url('./assets/Cafe1.jpg');
    background-size: cover;
    margin-top: 5px;
    display: none;
  } */

  /* ヘッダーナビ */
  #LinkNaviBox {
    width: 98%;
    display: flex;
    margin-top: 20px;
  }
  .LinkNavi {
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 5px 5px #AF8447;
  }
  #ConceptNavi {
    animation: Navi2Anime 5s ease -1s 1 normal;
  }
  #Label4Navi {
    animation: Navi4Anime 7s ease -1s 1 normal;
  }
  #Label5Navi {
    animation: Navi5Anime 10s ease -1s 1 normal;
  }

  /* 各コンテンツカラー */
  .Label1Color {
    background-color: #C29B6C;
  }
  .Label2Color {
    background-color: #704F38;
  }
  .Label3Color {
    background-color: #C29B6C;
  }
  .Label4Color {
    background-color: #704F38;
  }
  .Label5Color {
    background-color: #704F38;
  }

  /* トップページのリンクラベル */
  #MenuLabel {
    width: 100%;
  }
  .TopLabel {
    height: 30px;
    line-height: 30px;
    padding: 10px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 150%;
    border-radius: 15px;
    border: solid 1px black;
    text-align: center;
    cursor: pointer;
    box-shadow: 5px 5px #AF8447;
  }
  .LabelBox {
    display: flex;
  }
  #Label1 {
    width: 40%;
    /* animation: Label1Anime 5s ease -1s 1 normal; */
  }
  #Label1Right {
    width: 10%;
    animation: Label1RightAnime 10s ease -1s 1 normal;
    display: none;
  }
  #Label2 {
    width: 40%;
    animation: Label2Anime 5s ease -1s 1 normal;
  }
  #Label2Right {
    width: 50%;
    animation: Label2RightAnime 10s ease -1s 1 normal;
    display: none;
  }
  #Label3 {
    width: 40%;
    /* animation: Label3Anime 5s ease -1s 1 normal; */
  }
  #Label3Right {
    width: 30%;
    animation: Label3RightAnime 10s ease -1s 1 normal;
    display: none;
  }
  #Label4 {
    width: 40%;
    animation: Label4Anime 5s ease -1s 1 normal;
  }
  #Label4Right {
    width: 40%;
    animation: Label4RightAnime 10s ease -1s 1 normal;
    display: none;
  }
  #Label5 {
    width: 40%;
    animation: Label5Anime 5s ease -1s 1 normal;
  }
  #Label5Right {
    width: 50%;
    animation: Label5RightAnime 10s ease -1s 1 normal;
    display: none;
  }
  .BlankLabel {
    width: 5%;
    display: none;
  }

  /* タイトル */
  #TitleBox {
    height: 55px;
    line-height: 55px;
    font-size: 420%;
    color: #704F38;
  }
  #Title {
    margin-left: 15px;
    /* font-weight: bold; */
    font-family: 'Haettenschweiler', sans-serif;
  }
  #MiniTitle {
    margin-left: 15px;
    font-family: 'Haettenschweiler', sans-serif;
    display: none;
  }
  #Logo {
    width: 40px;
    height: 50px;
    border-radius: 15px;
    background-image: url('./assets/CafeLogo.jpg');
    background-size: cover;
    display: inline-block;
  }

  #Board {
    width: 200px;
    height: 400px;
    position: fixed;
    bottom: 1%;
    right: 1%;
    text-align: left;
    border-radius: 15px 0 0 15px;
    border: solid 1px black;
    padding: 10px;
    font-size: 75%;
    color: white;
    background-color: #704F38;
    overflow-y: scroll;
    box-shadow: 5px 5px #AF8447;
  }
  #BoardInputBox {
    display: flex;
  }
  #BoardInput {
    width: 190px;
    position: fixed;
    bottom: 10px;
    right: 20px;
    background-color: #C29B6C;
    border-color: #C29B6C;
  }
  .brownBox {
    height: 40px;
    background-color: #704F38;
    margin-top: 15px;
    margin-left: 10px;
    box-shadow: 5px 5px #AF8447;
  }

  .flexBox {
    display: flex;
  }
  .brownBox1 {
    width:20px;
    animation: ToggleShow 2s ease 0s infinite alternate;
    border-radius: 10px;
  }
  .brownBox2 {
    width:15px;
    animation: ToggleShow 2s ease 1s infinite alternate;
    border-radius: 20px;
  }
  .brownBox3 {
    width:10px;
    animation: ToggleShow 2s ease 2s infinite alternate;
    border-radius: 30px;
  }

  .coffeBox {
    width: 15px;
    height: 20px;
    border-left: solid 3px black;
    border-bottom: solid 3px black;
    border-right: solid 3px black;
    border-radius: 0 0 5px 5px;
    /* position: relative;
    top: 0px;
    left: 0px; */
    box-shadow: 5px 5px #AF8447;
    display: inline-block;
  }
  .coffeBody {
    width: 13px;
    height: 2px;
    background-color: #704F38;
    border-radius: 0 0 3px 3px;
    position: relative;
    bottom: -18px;
    left: 1px;
    animation: CoffeInsert 4s ease 0s infinite normal;
  }

  @keyframes IconMove {
    0% { top: 5%; }
    100% { top: 10%; }
  }

  @keyframes Label1Anime {
    0% { width: 0px; }
    100% { width: 40%; }
  }
  @keyframes Label1RightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Label2Anime {
    0% { width: 0px; }
    100% { width: 40%; }
  }
  @keyframes Label2RightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Label3Anime {
    0% { width: 0px; }
    100% { width: 40%; }
  }
  @keyframes Label3RightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Label4Anime {
    0% { width: 0px; }
    100% { width: 40%; }
  }
  @keyframes Label4RightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Label5Anime {
    0% { width: 0px; }
    100% { width: 40%; }
  }
  @keyframes Label5RightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes Navi2Anime {
    0% { border-radius: 60px; }
    100% { border-radius: 0px; }
  }
  @keyframes Navi4Anime {
    0% { border-radius: 60px; }
    100% { border-radius: 0px; }
  }
  @keyframes Navi5Anime {
    0% { border-radius: 60px; }
    100% { border-radius: 0px; }
  }
  @keyframes ToggleShow {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes CoffeInsert {
    0% {
      height: 2px;
      bottom: -17px;
      opacity: 0.7;
    }
    100% {
      height: 19px;
      bottom: 0;
      opacity: 1;
    }
  }

  @media (max-width:850px) {
    #TitleBox {
      font-size: 340%;
    }
    #Logo {
      width: 30px;
      height: 40px;
      border-radius: 10px;
    }
    #Board {
      width: 80%;
      height: 400px;
      font-size: 110%;
      position: static;
      margin-top: 50px;
    }
    #BoardInput {
      width: 80%;
      position: static;
      border: solid 1px black;
      font-size: 30px;
      margin-top: 15px;
      box-shadow: 5px 5px #AF8447;
    }
  }
  @media (max-width:500px) {
    #LinkNaviBox {
      display: none;
    }
    #TitleBox {
      font-size: 290%;
    }
    #Title {
      display: none;
    }
    #MiniTitle {
      display: inline;
    }
    #Logo {
      width: 25px;
      height: 35px;
      border-radius: 8px;
    }
    #Board {
      width: 80%;
      height: 400px;
      font-size: 110%;
      position: static;
      margin-top: 50px;
    }
    #BoardInput {
      width: 80%;
      position: static;
      border: solid 1px black;
      font-size: 25px;
      margin-top: 15px;
      box-shadow: 5px 5px #AF8447;
    }
  }
  @media (max-width:350px) {
    #Title {
      display: none;
    }
    #MiniTitle {
      display: inline;
    }
    #Board {
      width: 80%;
      height: 400px;
      font-size: 110%;
      position: static;
      margin-top: 50px;
    }
    #BoardInput {
      width: 80%;
      position: static;
      border: solid 1px black;
      font-size: 25px;
      margin-top: 15px;
      box-shadow: 5px 5px #AF8447;
    }
  }
  @media (max-width:300px) {
    #Logo {
      width: 30px;
      height: 35px;
      border-radius: 7px;
    }
  }
</style>

<template>
  <div id="app">
    <div id="TitleBox">
      <div id="Logo" @click="PageTransition(pageTop)" style="cursor: pointer;"></div>
      <span id="Title" @click="PageTransition(pageTop)" style="cursor: pointer;">Darari Working Cafe</span>
      <span id="MiniTitle" @click="PageTransition(pageTop)" style="cursor: pointer;">DWCafe</span>
    </div>
    <!-- <header id="header"></header> -->
    <div id="cafeIcon" @click="JunpPageTop()"></div>
    <div id="LinkNaviBox">
      <div id="MemberNavi" class="LinkNavi Label1Color" @click="PageTransition(pageMember)">Member</div>
      <div id="ConceptNavi" class="LinkNavi Label2Color" @click="PageTransition(pageConcept)">Concept</div>
      <div id="Label3Navi" class="LinkNavi Label3Color">Label3</div>
      <div id="Label4Navi" class="LinkNavi Label4Color">Label4</div>
      <div id="Label5Navi" class="LinkNavi Label5Color">Label5</div>
    </div>
    <div>
      <template v-if="currentPage === pageTop">
        <!-- <div id="MenuLabel"> -->
          <div class="flexBox">
            <div id="Label1" class="TopLabel Label1Color" @click="PageTransition(pageMember)">
              <div class="coffeBox">
                <div class="coffeBody"></div>
              </div>
              Member
            </div>
            <div class="brownBox1 brownBox" style="margin-top: 25px;"></div>
            <div class="brownBox2 brownBox" style="margin-top: 25px;"></div>
            <div class="brownBox3 brownBox" style="margin-top: 25px;"></div>
          </div>
          <div id="Label2" class="TopLabel Label2Color" @click="PageTransition(pageConcept)">Concept</div><div class="BlankLabel TopLabel"></div><div id="Label2Right" class="TopLabel Label2Color"></div>
          <div class="flexBox">
            <div id="Label3" class="TopLabel Label3Color">
              <div class="coffeBox">
                <div class="coffeBody"></div>
              </div>
              Label3
            </div>
            <div class="brownBox1 brownBox" style="margin-top: 25px;"></div>
            <div class="brownBox2 brownBox" style="margin-top: 25px;"></div>
            <div class="brownBox3 brownBox" style="margin-top: 25px;"></div>
          </div>
          <div id="Label4" class="TopLabel Label4Color">Label4</div><div class="BlankLabel TopLabel"></div><div id="Label4Right" class="TopLabel Label4Color"></div>
          <div id="Label5" class="TopLabel Label5Color">Label5</div><div class="BlankLabel TopLabel"></div><div id="Label5Right" class="TopLabel Label5Color"></div>
        <!-- </div> -->
      </template>
      <Member v-else-if="currentPage === pageMember"/>
      <Concept v-else-if="currentPage === pageConcept"/>
    </div>
    <div id="Board"></div>
    <form>
      <div id="BoardInputBox">
        <input id="BoardInput" type="text" onBlur="SendBoardText();" placeholder="雑談">
        <div class="brownBox1 brownBox"></div>
        <div class="brownBox2 brownBox"></div>
        <div class="brownBox3 brownBox"></div>
      </div>
    </form>
<!-- #region [メール送信フォームコメントアウト] -->
    <!-- <div>
      <form action="#">
        <button @click="SendMail(); return false;">メール送信</button>
      </form>
    </div> -->
<!-- #endregion -->
  </div>
</template>

<script>
  // テンプレートファイルを読み込む
  //import setImmediate from '../node_modules/setimmediate'
  import Member from './components/Member.vue'
  import Concept from './components/Concept.vue'

  export default {
    name: 'app',
    data() {
      return {
        currentPage: "top",

        // ▼ページ判定用文字列
        pageTop: "top",
        pageMember: "member",
        pageConcept: "concept",

        // 掲示板テキスト
        boardText: "",
        
        // Firebase
        firebaseConfig: null,
        database: null,

        // ロードイベント用
        loadStyleClass: "",
      }
    }
    ,components: {
      Member
      ,Concept
    }
    ,methods: {
      PageTransition(page) {
        this.currentPage = page;
      },
      JunpPageTop() {
        document.body.scrollTop = 0;
      },
// #region [メール送信メソッドコメントアウト]
      //SendMail() {
      //  let nodeMail = require("../node_modules/nodemailer");

      //  let smtp = nodeMail.createTransport({
      //    host: 'smtp.gmail.com',
      //    port: 465,
      //    secure: true,
      //    auth: {
      //      user: "lowtone03@gmail.com",
      //      pass: "k0330goggo0330"
      //    }
      //  });

      //  let message = {
      //    from: 'lowtone03@gmail.com',
      //    to: 'lowtone03@gmail.com',
      //    subject: 'test',
      //    text: 'テスト'
      //  };

      //  try {
      //    smtp.sendMail(message, (error, info) => {
      //      if (error) {
      //        alert("送信エラー" + error.message);
      //        return;
      //      }

      //      alert("送信成功");
      //    });
      //  } catch (e) {
      //    alert("例外発生" + e);
      //  }
      //}
// #endregion
    }
  }
</script>
