const quiz = [
	{
	question: "世界で一番高い建物はどれ？",
	choices :[
		"東京スカイツリー",
		"ブルジュ・ハリファ",
		"エンパイア・ステート",
		 "KK100"
	],
	answer: "ブルジュ・ハリファ",
	},{
	question: "世界で２番目に面積の大きい国は？",
	choices :[
		"中国",
		"アメリカ合衆国",
		"オーストラリア",
		 "カナダ"
	],
	answer: "カナダ",	
	},{
	question: "世界で3番目に人口が多い国は？",
	choices :[
		"インドネシア",
		"アメリカ合衆国",
		"ブラジル",
		 "バングラデシュ"
	],
	answer: "アメリカ合衆国",
	}
	];

const reset = "もう一度行いますか？"
const $button = document.getElementsByTagName("button");
let buttonLength = $button.length;
let quizIndex = 0;
let quizLength = quiz.length;
let score = 0;

const setUpQuiz = () => {
	document.getElementById("js-question").textContent=quiz[quizIndex].question;
	let buttonIndex = 0;
	while (buttonIndex < buttonLength){
		$button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
		buttonIndex++;
	}
}
setUpQuiz(); 


/*ボタンが押されたあとの内容*/
const clickHandler = (e) => {
	if(quiz[quizIndex].answer === e.target.textContent){
		window.alert("正解");
		score++;
		}else{
	window.alert("不正解");
}
	  quizIndex++;
	if(quizIndex < quizLength){
        setUpQuiz();
        	}else{
		window.alert("終了！");
		window.alert("あなたの得点は"+score+"/"+quizLength+"です。");
		document.getElementById("js-question").textContent=reset;
		let buttonIndex_2= 0;
		while (buttonIndex_2 < buttonLength){
				$button[buttonIndex_2].textContent ="continue";
				$button[buttonIndex_2].removeEventListener("click",clickHandler);
				$button[buttonIndex_2].addEventListener("click",resetQuiz);
				buttonIndex_2++;
			}
	}
	}


/*ボタンが押されたら反応するようにする機能*/
let buttonIndex_3 = 0;
while (buttonIndex_3 < buttonLength) {
	$button[buttonIndex_3].addEventListener("click",(e)=>{
	clickHandler(e)
	});
	buttonIndex_3++; 	

}

function resetQuiz(){
	quizIndex = 0;
	score = 0;
	setUpQuiz();
	let buttonIndex_4=0;
	while(buttonIndex_4 < buttonLength){
		$button[buttonIndex_4].textContent = quiz[quizIndex].choices[buttonIndex_4];
		$button[buttonIndex_4].removeEventListener("click",resetQuiz);

		setTimeout(()=>{
			$button[buttonIndex_4].addEventListener("click",clickHandler);
	},0);
		
		buttonIndex_4++;
	}
}

/*リセット後の動作ができない*/