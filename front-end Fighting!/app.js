document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  /*squares 为一个15x15的数组，第一行为0~14……*/
  const failDegreeDisplay = document.querySelector("#failDegree");
  const winDegreeDisplay = document.querySelector("#winDegree");
  const energyDisplay = document.querySelector("#energy");
  const endwithFail = document.querySelector(".grid");
  const endwithWin = document.querySelector(".grid");
  let beginnerIndex = 217;
  let failDegree = 0;
  let winDegree = 0;
  let energy = 0;
  let energyMost = 3;
  let width = 15;
  let boundary = 224;
  let leftboundary = 210;
  let rightboundary = 224;
  let failDegreeMost = 9;
  let winShowIndex = 3;
  let failShowIndex = 7;
  let failShowIconIndex = 6;
  let winShowIconIndex = 2;
  let energyShowIconIndex = 10;
  let energyShowIconOneIndex = 11;
  let energyShowIconTwoIndex = 12;
  let energyShowIconThreeIndex = 13;
  let vueCollect = 0;
  let vsCodeCollect = 0;
  let gitCollect = 0;
  let cssCollect = 0;
  let htmlCollect = 0;
  let javaScriptCollect = 0;
  let npmCollect = 0;
  let webpackCollect = 0;
  let mongoDBCollect = 0;
  let nodeJsCollect = 0;
  let githubCollect = 0;
  let winDegreeMost = 9;
  let resultShowOneIndex = 110;
  let resultShowTwoIndex = 111;
  let resultShowThreeIndex = 112;
  let resultShowFourIndex = 113;
  let resultShowFiveIndex = 114;
  let loadingIndex = 112;
  squares[beginnerIndex].classList.add("beginner");
  squares[failShowIndex].classList.add("zero");
  squares[winShowIndex].classList.add("zero");
  squares[failShowIconIndex].classList.add("failShow");
  squares[winShowIconIndex].classList.add("winShow");
  squares[energyShowIconIndex].classList.add("energyShow");
  squares[loadingIndex].classList.add("three3");

  setTimeout(() => squares[loadingIndex].classList.remove("three3"), 1000);
  setTimeout(() => squares[loadingIndex].classList.add("two2"), 1001);
  setTimeout(() => squares[loadingIndex].classList.remove("two2"), 2000);
  setTimeout(() => squares[loadingIndex].classList.add("one1"), 2001);
  setTimeout(() => squares[loadingIndex].classList.remove("one1"), 3000);
  setTimeout(() => squares[loadingIndex].classList.add("zero0"), 3001);
  setTimeout(() => squares[loadingIndex].classList.remove("zero0"), 4500);

  /* squares[failShowIndex].classList.add("failShow");
  squares[energyShowIndex].classListList.add("energyShow");*/
  function failDegreeShowChange() {
    const failDegreeShowZero = failDegree === 0;
    const failDegreeShowOne = failDegree === 1;
    const failDegreeShowTwo = failDegree === 2;
    const failDegreeShowThree = failDegree === 3;
    const failDegreeShowFour = failDegree === 4;
    const failDegreeShowFive = failDegree === 5;
    const failDegreeShowSix = failDegree === 6;
    const failDegreeShowSeven = failDegree === 7;
    const failDegreeShowEight = failDegree === 8;
    const failDegreeShowNine = failDegree === 9;
    const failDegreeShowTen = failDegree >= 10;
    if (failDegreeShowOne) {
      /*squares[failShowIndex].classList.remove("zero");*/
      squares[failShowIndex].classList.add("one");
    }
    if (failDegreeShowTwo) {
      /* squares[failShowIndex].classList.remove("one");*/
      squares[failShowIndex].classList.add("two");
    }
    if (failDegreeShowThree) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("three");
    }
    if (failDegreeShowFour) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("four");
    }
    if (failDegreeShowFive) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("five");
    }
    if (failDegreeShowSix) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("six");
    }
    if (failDegreeShowSeven) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("seven");
    }
    if (failDegreeShowEight) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("eight");
    }
    if (failDegreeShowNine) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("nine");
    }
    if (failDegreeShowTen) {
      /* squares[failShowIndex].classList.remove("two");*/
      squares[failShowIndex].classList.add("ten");
    }
  }
  function winDegreeShowChange() {
    const winDegreeShowZero = winDegree === 0;
    const winDegreeShowOne = winDegree === 1;
    const winDegreeShowTwo = winDegree === 2;
    const winDegreeShowThree = winDegree === 3;
    const winDegreeShowFour = winDegree === 4;
    const winDegreeShowFive = winDegree === 5;
    const winDegreeShowSix = winDegree === 6;
    const winDegreeShowSeven = winDegree === 7;
    const winDegreeShowEight = winDegree === 8;
    const winDegreeShowNine = winDegree === 9;
    const winDegreeShowTen = winDegree == 10;
    if (winDegreeShowOne) {
      /*squares[winShowIndex].classList.remove("zero");*/
      squares[winShowIndex].classList.add("one");
    }
    if (winDegreeShowTwo) {
      /* squares[winShowIndex].classList.remove("one");*/
      squares[winShowIndex].classList.add("two");
    }
    if (winDegreeShowThree) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("three");
    }
    if (winDegreeShowFour) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("four");
    }
    if (winDegreeShowFive) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("five");
    }
    if (winDegreeShowSix) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("six");
    }
    if (winDegreeShowSeven) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("seven");
    }
    if (winDegreeShowEight) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("eight");
    }
    if (winDegreeShowNine) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("nine");
    }
    if (winDegreeShowTen) {
      /* squares[winShowIndex].classList.remove("two");*/
      squares[winShowIndex].classList.add("ten");
    }
  }

  function energyShowChange() {
    const energyShowZero = energy === 0;
    const energyShowOne = energy === 1;
    const energyShowTwo = energy === 2;
    const energyShowThree = energy === 3;
    if (energyShowZero) {
      squares[energyShowIconOneIndex].classList.remove("tomatoIC");
      squares[energyShowIconTwoIndex].classList.remove("tomatoIC");
      squares[energyShowIconThreeIndex].classList.remove("tomatoIC");
    }
    if (energyShowOne) {
      squares[energyShowIconOneIndex].classList.add("tomatoIC");
      squares[energyShowIconTwoIndex].classList.remove("tomatoIC");
      squares[energyShowIconThreeIndex].classList.remove("tomatoIC");
    }
    if (energyShowTwo) {
      squares[energyShowIconOneIndex].classList.add("tomatoIC");
      squares[energyShowIconTwoIndex].classList.add("tomatoIC");
      squares[energyShowIconThreeIndex].classList.remove("tomatoIC");
    }
    if (energyShowThree) {
      squares[energyShowIconOneIndex].classList.add("tomatoIC");
      squares[energyShowIconTwoIndex].classList.add("tomatoIC");
      squares[energyShowIconThreeIndex].classList.add("tomatoIC");
    }
  }
  function success() {
    const successCondition = winDegree === 10;
    if (successCondition) {
      squares[resultShowOneIndex].classList.add("xiao");
      squares[resultShowTwoIndex].classList.add("gong");
      squares[resultShowThreeIndex].classList.add("xi");
      squares[resultShowFourIndex].classList.add("jin");
      squares[resultShowFiveIndex].classList.add("ji");
    }
  }
  function failure() {
    const failureCondition = failDegree === 10;
    if (failureCondition) {
      squares[resultShowOneIndex].classList.add("ku");
      squares[resultShowTwoIndex].classList.add("yao");
      squares[resultShowThreeIndex].classList.add("jia");
      squares[resultShowFourIndex].classList.add("you");
      squares[resultShowFiveIndex].classList.add("a");
    }
  }
  function disturbFactorsOne() {
    let weiBoNowIndex = 0;
    let zhiHuNowIndex = 1;
    let biZhanNowIndex = 4;
    let loveNowIndex = 9;
    let taoBaoNowIndex = 14;
    let partyNowIndex = 2;

    /* squares[weiBoNowIndex].classList.add("weiBo");
    squares[zhiHuNowIndex].classList.add("zhiHu");
    squares[weChatNowIndex].classList.add("weChat");
    squares[QQNowIndex].classList.add("QQ");
    squares[taoBaoNowIndex].classList.add("taoBao");
    squares[biZhanNowIndex].classList.add("biZhan");
    squares[aiQiYiNowIndex].classList.add("aiQiYi");
    squares[youTubeNowIndex].classList.add("youTube");
    squares[insNowIndex].classList.add("ins");
    squares[twitterNowIndex].classList.add("twitter");
    squares[partyNowIndex].classList.add("party");
    squares[taoBaoNowIndex].classList.add("taoBao");
    squares[hotPotNowIndex].classList.add("hotPot");
    squares[loveNowIndex].classList.add("love");
    squares[milkTeaNowIndex].classList.add("milkTea");*/

    function weiBoMoveOne() {
      squares[weiBoNowIndex].classList.remove("weiBo");
      weiBoNowIndex += width;
      if (squares[weiBoNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsOneInterval);
      }
      if (weiBoNowIndex > boundary) {
        clearInterval(weiBoMoveOneInterval);
      }
      squares[weiBoNowIndex].classList.add("weiBo");
    }
    weiBoMoveOneInterval = setInterval(weiBoMoveOne, 90);

    function zhiHuMoveOne() {
      failDegreeShowChange(failDegree);
      squares[zhiHuNowIndex].classList.remove("zhiHu");
      zhiHuNowIndex += width;
      if (squares[zhiHuNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsOneInterval);
      }
      if (zhiHuNowIndex > boundary) {
        clearInterval(zhiHuMoveOneInterval);
      }
      squares[zhiHuNowIndex].classList.add("zhiHu");
    }
    zhiHuMoveOneInterval = setInterval(zhiHuMoveOne, 123);

    function biZhanMoveOne() {
      failDegreeShowChange(failDegree);
      squares[biZhanNowIndex].classList.remove("biZhan");
      biZhanNowIndex += width;
      if (squares[biZhanNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsOneInterval);
      }
      if (biZhanNowIndex > boundary) {
        clearInterval(biZhanMoveOneInterval);
      }
      squares[biZhanNowIndex].classList.add("biZhan");
    }
    biZhanMoveOneInterval = setInterval(biZhanMoveOne, 150);
    function loveMoveOne() {
      failDegreeShowChange(failDegree);
      squares[loveNowIndex].classList.remove("love");
      loveNowIndex += width;
      if (squares[loveNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsOneInterval);
      }
      if (loveNowIndex > boundary) {
        clearInterval(loveMoveOneInterval);
      }
      squares[loveNowIndex].classList.add("love");
    }
    loveMoveOneInterval = setInterval(loveMoveOne, 98);
    function taoBaoMoveOne() {
      failDegreeShowChange(failDegree);
      squares[taoBaoNowIndex].classList.remove("taoBao");
      taoBaoNowIndex += width;
      if (squares[taoBaoNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsOneInterval);
      }
      if (taoBaoNowIndex > boundary) {
        clearInterval(taoBaoMoveOneInterval);
      }
      squares[taoBaoNowIndex].classList.add("taoBao");
    }
    taoBaoMoveOneInterval = setInterval(taoBaoMoveOne, 137);
    function partyMoveOne() {
      failDegreeShowChange(failDegree);
      squares[partyNowIndex].classList.remove("party");
      partyNowIndex += width;
      if (squares[partyNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsOneInterval);
      }
      if (partyNowIndex > boundary) {
        clearInterval(partyMoveOneInterval);
      }
      squares[partyNowIndex].classList.add("party");
    }
    partyMoveOneInterval = setInterval(partyMoveOne, 120);
  }
  disturbFactorsOneInterval = setInterval(disturbFactorsOne, 5633);

  function disturbFactorsTwo() {
    let youTubeNowIndex = 2;
    let twitterNowIndex = 3;
    let loveNowIndex = 5;
    let partyNowIndex = 6;
    let biZhanNowIndex = 12;
    let weiBoNowIndex = 9;

    function youTubeMoveTwo() {
      squares[youTubeNowIndex].classList.remove("youTube");
      youTubeNowIndex += width;
      if (squares[youTubeNowIndex].classList.contains("beginner")) {
        if (enesrgy > 0) {
          failDegree;
          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsTwoInterval);
      }
      if (youTubeNowIndex > boundary) {
        clearInterval(youTubeMoveTwoInterval);
      }
      squares[youTubeNowIndex].classList.add("youTube");
    }
    youTubeMoveTwoInterval = setInterval(youTubeMoveTwo, 188);

    function twitterMoveTwo() {
      squares[twitterNowIndex].classList.remove("twitter");
      twitterNowIndex += width;
      if (squares[twitterNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsTwoInterval);
      }
      if (twitterNowIndex > boundary) {
        clearInterval(twitterMoveTwoInterval);
      }
      squares[twitterNowIndex].classList.add("twitter");
    }
    twitterMoveTwoInterval = setInterval(twitterMoveTwo, 133);

    function loveMoveTwo() {
      squares[loveNowIndex].classList.remove("love");
      loveNowIndex += width;
      if (squares[loveNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsTwoInterval);
      }
      if (loveNowIndex > boundary) {
        clearInterval(loveMoveTwoInterval);
      }
      squares[loveNowIndex].classList.add("love");
    }
    loveMoveTwoInterval = setInterval(loveMoveTwo, 99);

    function partyMoveTwo() {
      squares[partyNowIndex].classList.remove("party");
      partyNowIndex += width;
      if (squares[partyNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;
          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsTwoInterval);
      }
      if (partyNowIndex > boundary) {
        clearInterval(partyMoveTwoInterval);
      }
      squares[partyNowIndex].classList.add("party");
    }
    partyMoveTwoInterval = setInterval(partyMoveTwo, 103);
    function biZhanMoveTwo() {
      squares[biZhanNowIndex].classList.remove("biZhan");
      biZhanNowIndex += width;
      if (squares[biZhanNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;
          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsTwoInterval);
      }
      if (biZhanNowIndex > boundary) {
        clearInterval(biZhanMoveTwoInterval);
      }
      squares[biZhanNowIndex].classList.add("biZhan");
    }
    biZhanMoveTwoInterval = setInterval(biZhanMoveTwo, 153);
    function weiBoMoveTwo() {
      squares[weiBoNowIndex].classList.remove("weiBo");
      weiBoNowIndex += width;
      if (squares[weiBoNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;
          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsTwoInterval);
      }
      if (weiBoNowIndex > boundary) {
        clearInterval(weiBoMoveTwoInterval);
      }
      squares[weiBoNowIndex].classList.add("weiBo");
    }
    weiBoMoveTwoInterval = setInterval(weiBoMoveTwo, 142);
  }
  disturbFactorsTwoInterval = setInterval(disturbFactorsTwo, 7363);

  function disturbFactorsThree() {
    let youTubeNowIndex = 7;
    let zhiHuNowIndex = 8;
    let taoBaoNowIndex = 10;
    let weiBoNowIndex = 4;
    let partyNowIndex = 13;
    let twitterNowIndex = 0;
    let loveNowIndex = 4;
    let biZhanNowIndex = 6;

    function youTubeMoveThree() {
      squares[youTubeNowIndex].classList.remove("youTube");
      youTubeNowIndex += width;
      if (squares[youTubeNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (youTubeNowIndex > boundary) {
        clearInterval(youTubeMoveThreeInterval);
      }
      squares[youTubeNowIndex].classList.add("youTube");
    }
    youTubeMoveThreeInterval = setInterval(youTubeMoveThree, 70);

    function taoBaoMoveThree() {
      squares[taoBaoNowIndex].classList.remove("taoBao");
      taoBaoNowIndex += width;
      if (squares[taoBaoNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (taoBaoNowIndex > boundary) {
        clearInterval(taoBaoMoveThreeInterval);
      }
      squares[taoBaoNowIndex].classList.add("taoBao");
    }
    taoBaoMoveThreeInterval = setInterval(taoBaoMoveThree, 80);

    function zhiHuMoveThree() {
      squares[zhiHuNowIndex].classList.remove("zhiHu");
      zhiHuNowIndex += width;
      if (squares[zhiHuNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (zhiHuNowIndex > boundary) {
        clearInterval(zhiHuMoveThreeInterval);
      }
      squares[zhiHuNowIndex].classList.add("zhiHu");
    }
    zhiHuMoveThreeInterval = setInterval(zhiHuMoveThree, 99);
    function weiBoMoveThree() {
      squares[weiBoNowIndex].classList.remove("weiBo");
      weiBoNowIndex += width;
      if (squares[weiBoNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (weiBoNowIndex > boundary) {
        clearInterval(weiBoMoveThreeInterval);
      }
      squares[weiBoNowIndex].classList.add("weiBo");
    }
    weiBoMoveThreeInterval = setInterval(weiBoMoveThree, 133);
    function partyMoveThree() {
      squares[partyNowIndex].classList.remove("party");
      partyNowIndex += width;
      if (squares[partyNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (partyNowIndex > boundary) {
        clearInterval(partyMoveThreeInterval);
      }
      squares[partyNowIndex].classList.add("party");
    }
    partyMoveThreeInterval = setInterval(partyMoveThree, 143);
    function twitterMoveThree() {
      squares[twitterNowIndex].classList.remove("twitter");
      twitterNowIndex += width;
      if (squares[twitterNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (twitterNowIndex > boundary) {
        clearInterval(twitterMoveThreeInterval);
      }
      squares[twitterNowIndex].classList.add("twitter");
    }
    twitterMoveThreeInterval = setInterval(twitterMoveThree, 77);
    function loveMoveThree() {
      squares[loveNowIndex].classList.remove("love");
      loveNowIndex += width;
      if (squares[loveNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (loveNowIndex > boundary) {
        clearInterval(loveMoveThreeInterval);
      }
      squares[loveNowIndex].classList.add("love");
    }
    loveMoveThreeInterval = setInterval(loveMoveThree, 123);
    function biZhanMoveThree() {
      squares[biZhanNowIndex].classList.remove("biZhan");
      biZhanNowIndex += width;
      if (squares[biZhanNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsThreeInterval);
      }
      if (biZhanNowIndex > boundary) {
        clearInterval(biZhanMoveThreeInterval);
      }
      squares[biZhanNowIndex].classList.add("biZhan");
    }
    biZhanMoveThreeInterval = setInterval(biZhanMoveThree, 135);
  }
  disturbFactorsThreeInterval = setInterval(disturbFactorsThree, 10073);
  function disturbFactorsFour() {
    let youTubeNowIndex = 13;
    let zhiHuNowIndex = 3;
    let weiBoNowIndex = 5;
    let partyNowIndex = 11;
    let loveNowIndex = 8;
    let biZhanNowIndex = 1;

    function youTubeMoveFour() {
      squares[youTubeNowIndex].classList.remove("youTube");
      youTubeNowIndex += width;
      if (squares[youTubeNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsFourInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsFourInterval);
      }
      if (youTubeNowIndex > boundary) {
        clearInterval(youTubeMoveFourInterval);
      }
      squares[youTubeNowIndex].classList.add("youTube");
    }
    youTubeMoveFourInterval = setInterval(youTubeMoveFour, 260);

    function zhiHuMoveFour() {
      squares[zhiHuNowIndex].classList.remove("zhiHu");
      zhiHuNowIndex += width;
      if (squares[zhiHuNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsFourInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsFourInterval);
      }
      if (zhiHuNowIndex > boundary) {
        clearInterval(zhiHuMoveFourInterval);
      }
      squares[zhiHuNowIndex].classList.add("zhiHu");
    }
    zhiHuMoveFourInterval = setInterval(zhiHuMoveFour, 288);
    function weiBoMoveFour() {
      squares[weiBoNowIndex].classList.remove("weiBo");
      weiBoNowIndex += width;
      if (squares[weiBoNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsFourInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsFourInterval);
      }
      if (weiBoNowIndex > boundary) {
        clearInterval(weiBoMoveFourInterval);
      }
      squares[weiBoNowIndex].classList.add("weiBo");
    }
    weiBoMoveFourInterval = setInterval(weiBoMoveFour, 238);
    function partyMoveFour() {
      squares[partyNowIndex].classList.remove("party");
      partyNowIndex += width;
      if (squares[partyNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsFourInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsFourInterval);
      }
      if (partyNowIndex > boundary) {
        clearInterval(partyMoveFourInterval);
      }
      squares[partyNowIndex].classList.add("party");
    }
    partyMoveFourInterval = setInterval(partyMoveFour, 299);

    function loveMoveFour() {
      squares[loveNowIndex].classList.remove("love");
      loveNowIndex += width;
      if (squares[loveNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsFourInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsFourInterval);
      }
      if (loveNowIndex > boundary) {
        clearInterval(loveMoveFourInterval);
      }
      squares[loveNowIndex].classList.add("love");
    }
    loveMoveFourInterval = setInterval(loveMoveFour, 173);
    function biZhanMoveFour() {
      squares[biZhanNowIndex].classList.remove("biZhan");
      biZhanNowIndex += width;
      if (squares[biZhanNowIndex].classList.contains("beginner")) {
        if (energy > 0) {
          failDegree;

          energy -= 1;
          energyShowChange(energy);
        } else {
          failDegree += 1;
          failDegreeShowChange(failDegree);
        }
      }
      failure(failDegree);
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(disturbFactorsFourInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(disturbFactorsFourInterval);
      }
      if (biZhanNowIndex > boundary) {
        clearInterval(biZhanMoveFourInterval);
      }
      squares[biZhanNowIndex].classList.add("biZhan");
    }
    biZhanMoveFourInterval = setInterval(biZhanMoveFour, 188);
  }
  disturbFactorsFourInterval = setInterval(disturbFactorsFour, 2973);

  function antiDisturbFactorsOne() {
    let tomatoOneIndex = 1;
    let tomatoTwoIndex = 6;
    let tomatoThreeIndex = 12;
    function tomatoOneMoveOne() {
      squares[tomatoOneIndex].classList.remove("tomato");
      tomatoOneIndex += 15;
      if (squares[tomatoOneIndex].classList.contains("beginner")) {
        if (energy < energyMost) {
          energy += 1;
          energyShowChange(energy);
        } else {
          energy;
        }
      }
      if (failDegree > failDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithFail.classList.add("endwithFail");
        }
        clearInterval(antidisturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(antidisturbFactorsOneInterval);
      }
      if (tomatoOneIndex > boundary) {
        clearInterval(tomatoOneMoveOne);
      }
      squares[tomatoOneIndex].classList.add("tomato");
    }
    tomatoOneMoveOneInterval = setInterval(tomatoOneMoveOne, 211);

    /* function tomatoTwoMoveOne (){
      squares[tomatoTwoIndex].classList.remove("tomato");
      tomatoTwoIndex+=15;
      if(squares[tomatoTwoIndex].classList.contains("beginner")){
        if(energy<energyMost){
          energy+=1;
          energyShowChange(energy);
          
        }
        else{
          energy;
          
        }
      }
      if(failDegree>failDegreeMost){
        
        clearInterval(antidisturbFactorsOneInterval);
      }
      if(winDegree>winDegreeMost){
        clearInterval(antidisturbFactorsOneInterval)
      }
      if(tomatoTwoIndex>boundary){
        clearInterval(tomatoTwoMoveOne);
      }
      squares[tomatoTwoIndex].classList.add("tomato");
    }
    tomatoTwoMoveOneInterval=setInterval(tomatoTwoMoveOne,3000);*/

    function tomatoThreeMoveOne() {
      squares[tomatoThreeIndex].classList.remove("tomato");
      tomatoThreeIndex += 15;
      if (squares[tomatoThreeIndex].classList.contains("beginner")) {
        if (energy < energyMost) {
          energy += 1;
          energyShowChange(energy);
        } else {
          energy;
        }
      }
      if (failDegree > failDegreeMost) {
        clearInterval(antidisturbFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(antidisturbFactorsOneInterval);
      }
      if (tomatoThreeIndex > boundary) {
        clearInterval(tomatoThreeMoveOne);
      }
      squares[tomatoThreeIndex].classList.add("tomato");
    }
    tomatoThreeMoveOneInterval = setInterval(tomatoThreeMoveOne, 230);
  }
  antiDisturbFactorsOneInterval = setInterval(antiDisturbFactorsOne, 12970);

  function antiDisturbFactorsTwo() {
    let tomatoOneIndex = 3;
    let tomatoTwoIndex = 8;
    let tomatoThreeIndex = 11;
    /*  function tomatoOneMoveTwo (){
      squares[tomatoOneIndex].classList.remove("tomato");
      tomatoOneIndex+=15;
      if(squares[tomatoOneIndex].classList.contains("beginner")){
        if(energy<energyMost){
          energy+=1;
          energyShowChange(energy);
          
        }
        else{
          energy;
          
        }
      }
      if(failDegree>failDegreeMost){
        
        clearInterval(antidisturbFactorsTwoInterval);
      }
      if(winDegree>winDegreeMost){
        clearInterval(antidisturbFactorsTwoInterval)
      }
      if(tomatoOneIndex>boundary){
        clearInterval(tomatoOneMoveTwo);
      }
      squares[tomatoOneIndex].classList.add("tomato");
    }
    tomatoOneMoveTwoInterval=setInterval(tomatoOneMoveTwo,600);*/

    function tomatoTwoMoveTwo() {
      squares[tomatoTwoIndex].classList.remove("tomato");
      tomatoTwoIndex += 15;
      if (squares[tomatoTwoIndex].classList.contains("beginner")) {
        if (energy < energyMost) {
          energy += 1;
          energyShowChange(energy);
        } else {
          energy;
        }
      }
      if (failDegree > failDegreeMost) {
        clearInterval(antidisturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(antidisturbFactorsTwoInterval);
      }
      if (tomatoTwoIndex > boundary) {
        clearInterval(tomatoTwoMoveTwo);
      }
      squares[tomatoTwoIndex].classList.add("tomato");
    }
    tomatoTwoMoveTwoInterval = setInterval(tomatoTwoMoveTwo, 200);

    function tomatoThreeMoveTwo() {
      squares[tomatoThreeIndex].classList.remove("tomato");
      tomatoThreeIndex += 15;
      if (squares[tomatoThreeIndex].classList.contains("beginner")) {
        if (energy < energyMost) {
          energy += 1;
          energyShowChange(energy);
        } else {
          energy;
        }
      }
      if (failDegree > failDegreeMost) {
        clearInterval(antidisturbFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(antidisturbFactorsTwoInterval);
      }
      if (tomatoThreeIndex > boundary) {
        clearInterval(tomatoThreeMoveTwo);
      }
      squares[tomatoThreeIndex].classList.add("tomato");
    }
    tomatoThreeMoveTwoInterval = setInterval(tomatoThreeMoveTwo, 233);
  }
  antiDisturbFactorsTwoInterval = setInterval(antiDisturbFactorsTwo, 4034);

  function antiDisturbFactorsThree() {
    let tomatoOneIndex = 0;
    let tomatoTwoIndex = 2;
    let tomatoThreeIndex = 5;
    /* function tomatoOneMoveThree (){
      squares[tomatoOneIndex].classList.remove("tomato");
      tomatoOneIndex+=15;
      if(squares[tomatoOneIndex].classList.contains("beginner")){
        if(energy<energyMost){
          energy+=1;
          energyShowChange(energy);
          
          
        }
        else{
          energy;
          
  
        }
      }
      if(failDegree>failDegreeMost){
        
        clearInterval(antidisturbFactorsThreeInterval);
      }
      if(winDegree>winDegreeMost){
        clearInterval(antidisturbFactorsThreeInterval)
      }
      if(tomatoOneIndex>boundary){
        clearInterval(tomatoOneMoveThree);
      }
      squares[tomatoOneIndex].classList.add("tomato");
    }
    tomatoOneMoveThreeInterval=setInterval(tomatoOneMoveThree,100);*/

    function tomatoTwoMoveThree() {
      squares[tomatoTwoIndex].classList.remove("tomato");
      tomatoTwoIndex += 15;
      if (squares[tomatoTwoIndex].classList.contains("beginner")) {
        if (energy < energyMost) {
          energy += 1;
          energyShowChange(energy);
        } else {
          energy;
        }
      }
      if (failDegree > failDegreeMost) {
        clearInterval(antidisturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(antidisturbFactorsThreeInterval);
      }
      if (tomatoTwoIndex > boundary) {
        clearInterval(tomatoTwoMoveThree);
      }
      squares[tomatoTwoIndex].classList.add("tomato");
    }
    tomatoTwoMoveThreeInterval = setInterval(tomatoTwoMoveThree, 222);

    function tomatoThreeMoveThree() {
      squares[tomatoThreeIndex].classList.remove("tomato");
      tomatoThreeIndex += 15;
      if (squares[tomatoThreeIndex].classList.contains("beginner")) {
        if (energy < energyMost) {
          energy += 1;
          energyShowChange(energy);
        } else {
          energy;
        }
      }
      if (failDegree > failDegreeMost) {
        clearInterval(antidisturbFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        clearInterval(antidisturbFactorsThreeInterval);
      }
      if (tomatoThreeIndex > boundary) {
        clearInterval(tomatoThreeMoveThree);
      }
      squares[tomatoThreeIndex].classList.add("tomato");
    }
    tomatoThreeMoveThreeInterval = setInterval(tomatoThreeMoveThree, 200);
  }
  antiDisturbFactorsThreeInterval = setInterval(antiDisturbFactorsThree, 8933);

  function learningFactorsOne() {
    let vsCodeIndex = 0;
    let gitIndex = 2;
    let htmlIndex = 7;
    let cssIndex = 12;
    let nodeJsIndex = 5;
    let githubIndex = 10;
    function vsCodeMoveOne() {
      squares[vsCodeIndex].classList.remove("vsCode");
      vsCodeIndex += 15;
      if (
        squares[vsCodeIndex].classList.contains("beginner") &
        (vsCodeCollect < 1)
      ) {
        vsCodeCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsOneInterval);
      }
      if (vsCodeIndex > boundary) {
        clearInterval(vsCodeMoveOneInterval);
      }
      squares[vsCodeIndex].classList.add("vsCode");
    }
    vsCodeMoveOneInterval = setInterval(vsCodeMoveOne, 253);

    function gitMoveOne() {
      squares[gitIndex].classList.remove("git");
      gitIndex += 15;
      if (squares[gitIndex].classList.contains("beginner") & (gitCollect < 1)) {
        gitCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsOneInterval);
      }
      if (gitIndex > boundary) {
        clearInterval(gitMoveOneInterval);
      }
      squares[gitIndex].classList.add("git");
    }
    gitMoveOneInterval = setInterval(gitMoveOne, 267);

    function htmlMoveOne() {
      squares[htmlIndex].classList.remove("html");
      htmlIndex += 15;
      if (
        squares[htmlIndex].classList.contains("beginner") &
        (htmlCollect < 1)
      ) {
        htmlCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsOneInterval);
      }
      if (htmlIndex > boundary) {
        clearInterval(htmlMoveOneInterval);
      }
      squares[htmlIndex].classList.add("html");
    }
    htmlMoveOneInterval = setInterval(htmlMoveOne, 300);

    function cssMoveOne() {
      squares[cssIndex].classList.remove("css");
      cssIndex += 15;
      if (squares[cssIndex].classList.contains("beginner") & (cssCollect < 1)) {
        cssCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsOneInterval);
      }
      if (cssIndex > boundary) {
        clearInterval(cssMoveOneInterval);
      }
      squares[cssIndex].classList.add("css");
    }
    cssMoveOneInterval = setInterval(cssMoveOne, 259);
    function nodeJsMoveOne() {
      squares[nodeJsIndex].classList.remove("nodeJs");
      nodeJsIndex += 15;
      if (
        squares[nodeJsIndex].classList.contains("beginner") &
        (nodeJsCollect < 1)
      ) {
        nodeJsCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsOneInterval);
      }
      if (nodeJsIndex > boundary) {
        clearInterval(nodeJsMoveOneInterval);
      }
      squares[nodeJsIndex].classList.add("nodeJs");
    }
    nodeJsMoveOneInterval = setInterval(nodeJsMoveOne, 310);
    function githubMoveOne() {
      squares[githubIndex].classList.remove("github");
      githubIndex += 15;
      if (
        squares[githubIndex].classList.contains("beginner") &
        (githubCollect < 1)
      ) {
        githubCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsOneInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsOneInterval);
      }
      if (githubIndex > boundary) {
        clearInterval(githubMoveOneInterval);
      }
      squares[githubIndex].classList.add("github");
    }
    githubMoveOneInterval = setInterval(githubMoveOne, 277);
  }
  learningFactorsOneInterval = setInterval(learningFactorsOne, 6093);
  function learningFactorsTwo() {
    let javaScriptIndex = 4;
    let npmIndex = 8;
    let webpackIndex = 14;
    let cssIndex = 1;
    let vueIndex = 10;

    function javaScriptMoveTwo() {
      squares[javaScriptIndex].classList.remove("javaScript");
      javaScriptIndex += 15;
      if (
        squares[javaScriptIndex].classList.contains("beginner") &
        (javaScriptCollect < 1)
      ) {
        javaScriptCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsTwoInterval);
      }
      if (javaScriptIndex > boundary) {
        clearInterval(javaScriptMoveTwoInterval);
      }
      squares[javaScriptIndex].classList.add("javaScript");
    }
    javaScriptMoveTwoInterval = setInterval(javaScriptMoveTwo, 300);

    function npmMoveTwo() {
      squares[npmIndex].classList.remove("npm");
      npmIndex += 15;
      if (squares[npmIndex].classList.contains("beginner") & (npmCollect < 1)) {
        npmCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsTwoInterval);
      }
      if (npmIndex > boundary) {
        clearInterval(npmMoveTwoInterval);
      }
      squares[npmIndex].classList.add("npm");
    }
    npmMoveTwoInterval = setInterval(npmMoveTwo, 268);

    function webpackMoveTwo() {
      squares[webpackIndex].classList.remove("webpack");
      webpackIndex += 15;
      if (
        squares[webpackIndex].classList.contains("beginner") &
        (webpackCollect < 1)
      ) {
        webpackCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsTwoInterval);
      }
      if (webpackIndex > boundary) {
        clearInterval(webpackMoveTwoInterval);
      }
      squares[webpackIndex].classList.add("webpack");
    }
    webpackMoveTwoInterval = setInterval(webpackMoveTwo, 259);

    function vueMoveTwo() {
      squares[vueIndex].classList.remove("vue");
      vueIndex += 15;
      if (squares[vueIndex].classList.contains("beginner") & (vueCollect < 1)) {
        vueCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsTwoInterval);
      }
      if (vueIndex > boundary) {
        clearInterval(vueMoveTwoInterval);
      }
      squares[vueIndex].classList.add("vue");
    }
    vueMoveTwoInterval = setInterval(vueMoveTwo, 288);
    function cssMoveTwo() {
      squares[cssIndex].classList.remove("css");
      cssIndex += 15;
      if (squares[cssIndex].classList.contains("beginner") & (cssCollect < 1)) {
        cssCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsTwoInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsTwoInterval);
      }
      if (cssIndex > boundary) {
        clearInterval(cssMoveTwoInterval);
      }
      squares[cssIndex].classList.add("css");
    }
    cssMoveTwoInterval = setInterval(cssMoveTwo, 299);
  }
  learningFactorsTwoInterval = setInterval(learningFactorsTwo, 8043);
  function learningFactorsThree() {
    let vueIndex = 6;
    let mongoDBIndex = 10;
    let nodeJsIndex = 0;
    let webpackIndex = 2;
    let githubIndex = 13;

    function vueMoveThree() {
      squares[vueIndex].classList.remove("vue");
      vueIndex += 15;
      if (squares[vueIndex].classList.contains("beginner") & (vueCollect < 1)) {
        vueCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsThreeInterval);
      }
      if (vueIndex > boundary) {
        clearInterval(vueMoveThreeInterval);
      }
      squares[vueIndex].classList.add("vue");
    }
    vueMoveThreeInterval = setInterval(vueMoveThree, 300);

    function mongoDBMoveThree() {
      squares[mongoDBIndex].classList.remove("mongoDB");
      mongoDBIndex += 15;
      if (
        squares[mongoDBIndex].classList.contains("beginner") &
        (mongoDBCollect < 1)
      ) {
        mongoDBCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsThreeInterval);
      }
      if (mongoDBIndex > boundary) {
        clearInterval(mongoDBMoveThreeInterval);
      }
      squares[mongoDBIndex].classList.add("mongoDB");
    }
    mongoDBMoveThreeInterval = setInterval(mongoDBMoveThree, 269);
    function nodeJsMoveThree() {
      squares[nodeJsIndex].classList.remove("nodeJs");
      nodeJsIndex += 15;
      if (
        squares[nodeJsIndex].classList.contains("beginner") &
        (nodeJsCollect < 1)
      ) {
        nodeJsCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsThreeInterval);
      }
      if (nodeJsIndex > boundary) {
        clearInterval(nodeJsMoveThreeInterval);
      }
      squares[nodeJsIndex].classList.add("nodeJs");
    }
    nodeJsMoveThreeInterval = setInterval(nodeJsMoveThree, 254);
    function webpackMoveThree() {
      squares[webpackIndex].classList.remove("webpack");
      webpackIndex += 15;
      if (
        squares[webpackIndex].classList.contains("beginner") &
        (webpackCollect < 1)
      ) {
        webpackCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsThreeInterval);
      }
      if (webpackIndex > boundary) {
        clearInterval(webpackMoveThreeInterval);
      }
      squares[webpackIndex].classList.add("webpack");
    }
    webpackMoveThreeInterval = setInterval(webpackMoveThree, 289);
    function githubMoveThree() {
      squares[githubIndex].classList.remove("github");
      githubIndex += 15;
      if (
        squares[githubIndex].classList.contains("beginner") &
        (githubCollect < 1)
      ) {
        githubCollect += 1;
        winDegree += 1;
        winDegreeShowChange(winDegree);
      }
      success(winDegree);
      if (failDegree > failDegreeMost) {
        clearInterval(learningFactorsThreeInterval);
      }
      if (winDegree > winDegreeMost) {
        for (let i = 0; i < 225; i++) {
          endwithWin.classList.add("endwithWin");
        }
        clearInterval(learningFactorsThreeInterval);
      }
      if (githubIndex > boundary) {
        clearInterval(githubMoveThreeInterval);
      }
      squares[githubIndex].classList.add("github");
    }
    githubMoveThreeInterval = setInterval(githubMoveThree, 310);
  }
  learningFactorsThreeInterval = setInterval(learningFactorsThree, 9073);
  function beginnerMove(e) {
    const failResult = failDegree === 11;
    squares[beginnerIndex].classList.remove("beginner");
    switch (e.keyCode) {
      case 37:
        if (beginnerIndex !== leftboundary) beginnerIndex -= 1;
        break;
      case 39:
        if (beginnerIndex !== rightboundary) beginnerIndex += 1;
        break;
    }
    if (!failResult) {
      squares[beginnerIndex].classList.add("beginner");
    }
  }
  document.addEventListener("keydown", beginnerMove);
});
