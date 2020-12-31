const quiz = [
  {question :'オードリー若林の下の名前は？',
    answers :[
      '正恭',
      '正志',
      '孝志'
    ],
    correct:'正恭'
  },
  {question :'オードリー春日の下の名前は？',
    answers :[
      '俊久',
      '俊康',
      '俊彰'
    ],
    correct:'俊彰'
  },
  {question :'オードリーの改名前のコンビ名は「ナイス○○○」？',
    answers :[
      'トライ',
      'ミドル',
      'パス'
    ],
    correct:'ミドル'
  },
  {question :'ヒルナンデス！において二人が壊したのはIKEAの？',
    answers :[
      '椅子',
      '机',
      '棚'
    ],
    correct:'椅子'
  },
  {question :'オードリーのラジオリスナーの総称は「リトル？」',
    answers :[
      'アパー',
      '鬼瓦',
      'トゥース'
    ],
    correct:'トゥース'
  },
  {question :'オードリーが日曜深夜のレギュラー番組で共演しているアイドルグループは？',
    answers :[
      '乃木坂46',
      '櫻坂46',
      '日向坂46'
    ],
    correct:'日向坂46'
  },
  {question :'春日のギャグのうち、2009年に流行語大賞にノミネートされたのは？',
    answers :[
      'アパー',
      'トゥース',
      'へっ！！'
    ],
    correct:'トゥース'
  },
  {question :'若林はテレビやラジオで自分の奥さんのことを「なに林」と呼ぶ？',
    answers :[
      'にょぼ',
      'よめ',
      'つま'
      
    ],
    correct:'にょぼ'
  },
  {question :'若林が入籍したのは2019年の11月何日？',
    answers :[
      '21日',
      '22日',
      '23日'
    ],
    correct:'22日'
  },
  {question :'2008年Ⅿ１グランプリで敗者復活から見事決勝進出を果たしたが、その時のエントリーナンバーは？',
    answers :[
      '4431',
      '4432',
      '4433'
    ],
    correct:'4431'
  },
  
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題と選択肢の定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  
  
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else{
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else if(score === 10) {
    window.alert('全問終了です！結果は'+ score +'/'+ quizLength+'問正解！全問正解おめでトゥース！');
  }else if(score === 9) {
    window.alert('全問終了です！結果は'+ score +'/'+ quizLength+'問正解！惜しい！アパー！');
  }else if(score === 8) {
    window.alert('全問終了です！結果は'+ score +'/'+ quizLength+'問正解！あと2問！へっ！');
  }else{
    window.alert('全問終了です！結果は'+ score +'/'+ quizLength+'問正解！これを気にオードリーの番組を見たり、ラジオを聴いてみよう');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
};

