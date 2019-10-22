<style>
  /* 共通部分 */
  body {
    background-color: #947352;
  }
  #header {
    width: 98%;
    height: 200px;
    border: solid 5px #704F38;
    background-image: url('../public/img/Cafe1.jpg');
    background-size: cover;
    margin-top: 5px;
  }

  /* ヘッダーナビ */
  #LinkNaviBox {
    width: 98%;
    display: flex;
    margin-top: 5px;
  }
  .LinkNavi {
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
  }

  /* 各コンテンツカラー */
  .MemberColor {
    background-color: #52392F;
  }
  .ConceptColor {
    background-color: #674422;
  }
  .Label3Color {
    background-color: #704F38;
  }
  .Label4Color {
    background-color: #83643E;
  }
  .Label5Color {
    background-color: #C29B6C;
  }

  /* トップページのリンクラベル */
  #MenuLabel {
    width: 100%;
  }
  .TopLabel {
    height: 50px;
    line-height: 50px;
    padding: 10px;
    margin-top: 20px;
    font-weight: bold;
  }
  .LabelBox {
    display: flex;
  }
  #MemberLabel {
    width: 70%;
    animation: MemberLabelAnime 5s ease -1s 1 normal;
  }
  #MemberLabelRight {
    width: 10%;
    animation: MemberLabelRightAnime 10s ease -1s 1 normal;
  }
  #ConceptLabel {
    width: 60%;
    animation: ConceptLabelAnime 5s ease -1s 1 normal;
  }
  #ConceptLabelRight {
    width: 20%;
    animation: ConceptLabelRightAnime 10s ease -1s 1 normal;
  }
  #Label3 {
    width: 50%;
    animation: Label3Anime 5s ease -1s 1 normal;
  }
  #Label3Right {
    width: 30%;
    animation: Label3RightAnime 10s ease -1s 1 normal;
  }
  #Label4 {
    width: 40%;
    animation: Label4Anime 5s ease -1s 1 normal;
  }
  #Label4Right {
    width: 40%;
    animation: Label4RightAnime 10s ease -1s 1 normal;
  }
  #Label5 {
    width: 30%;
    animation: Label5Anime 5s ease -1s 1 normal;
  }
  #Label5Right {
    width: 50%;
    animation: Label5RightAnime 10s ease -1s 1 normal;
  }
  .BlankLabel {
    width: 5%;
  }

  /* タイトル */
  #TitleBox {
    height: 55px;
    text-align: right;
    font-size: 300%;
  }
  #Title {
    position: absolute;
    top: 10px;
    left: 60px;
    font-weight: bold;
    font-family: 'Haettenschweiler', sans-serif;
  }
  #Logo {
    width: 40px;
    height: 50px;
    border-radius: 15px;
    background-image: url('../public/img/CafeLogo.jpg');
    background-size: cover;
  }

  @keyframes MemberLabelAnime {
    0% { width: 0px; }
    100% { width: 70%; }
  }
  @keyframes MemberLabelRightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes ConceptLabelAnime {
    0% { width: 0px; }
    100% { width: 60%; }
  }
  @keyframes ConceptLabelRightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Label3Anime {
    0% { width: 0px; }
    100% { width: 50%; }
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
    100% { width: 30%; }
  }
  @keyframes Label5RightAnime {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width:500px) {
    #LinkNaviBox {
      display: none;
    }
    #TitleBox {
      font-size: 250%;
    }
  }
  @media (max-width:350px) {
    #TitleBox {
      font-size: 220%;
    }
  }
</style>

<template>
  <div id="app">
    <div id="TitleBox">
      <span id="Title" @click="PageTransition(pageTop)">Darari Working Cafe</span>
      <div id="Logo" @click="PageTransition(pageTop)"></div>
    </div>
    <header id="header"></header>
    <div id="LinkNaviBox">
      <div id="MemberNavi" class="LinkNavi MemberColor" @click="PageTransition(pageMember)">Member</div>
      <div id="ConceptNavi" class="LinkNavi ConceptColor" @click="PageTransition(pageConcept)">Concept</div>
      <div id="Label3Navi" class="LinkNavi Label3Color">Label3</div>
      <div id="Label4Navi" class="LinkNavi Label4Color">Label4</div>
      <div id="Label5Navi" class="LinkNavi Label5Color">Label5</div>
    </div>
    <div>
      <template v-if="currentPage === pageTop">
        <div id="MenuLabel">
          <div class="LabelBox" @click="PageTransition(pageMember)"><div id="MemberLabel" class="TopLabel MemberColor">Member</div><div class="BlankLabel TopLabel"></div><div id="MemberLabelRight" class="TopLabel MemberColor"></div></div>
          <div class="LabelBox" @click="PageTransition(pageConcept)"><div id="ConceptLabel" class="TopLabel ConceptColor">Concept</div><div class="BlankLabel TopLabel"></div><div id="ConceptLabelRight" class="TopLabel ConceptColor"></div></div>
          <div class="LabelBox"><div id="Label3" class="TopLabel Label3Color">Label3</div><div class="BlankLabel TopLabel"></div><div id="Label3Right" class="TopLabel Label3Color"></div></div>
          <div class="LabelBox"><div id="Label4" class="TopLabel Label4Color">Label4</div><div class="BlankLabel TopLabel"></div><div id="Label4Right" class="TopLabel Label4Color"></div></div>
          <div class="LabelBox"><div id="Label5" class="TopLabel Label5Color">Label5</div><div class="BlankLabel TopLabel"></div><div id="Label5Right" class="TopLabel Label5Color"></div></div>
        </div>
      </template>
      <Member v-else-if="currentPage === pageMember"/>
      <Concept v-else-if="currentPage === pageConcept"/>
    </div>
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
