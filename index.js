const startbtn = document.getElementById("startbtn");
const nextbtn = document.getElementById("nextbtn");
const restartbtn = document.getElementById("restartbtn");
const questionSection= document.getElementById("questionSection");
const answerSection= document.getElementById("answerSection");
const answerbtn = document.getElementById("answerbtn")

let currentQuizeIndex= 0;
let score = 0;


function startQuize(){
  
let currentQuestion =questions[currentQuizeIndex]; 
let currentQuizeNo = currentQuizeIndex + 1;

startbtn.classList.add('hide');
questionSection.classList.remove('hide');
answerSection.classList.remove('hide');
resetprev();
questionSection.innerHTML= currentQuizeNo +"." + currentQuestion.question; 


currentQuestion.answers.forEach(answer =>{
  const button = document.createElement('button');
  button.innerHTML=answer.text;
  button.classList.add('answerbtn');
  answerSection.appendChild(button);
  if(answer.correct){
    button.dataset.correct= answer.correct;
  }
  button.addEventListener('click',selectAnswer);
})


}

startbtn.addEventListener('click', startQuize);


function resetprev(){
  while(answerSection.firstChild){
    answerSection.removeChild(answerSection.firstChild);
  }
}


function selectAnswer(e){
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct === "true";
  if(iscorrect){
    selectedbtn.classList.add("correctt");
    score++;
  }
  else{
    selectedbtn.classList.add("incorrectt");
  }
  Array.from( answerSection.children).forEach(button=>{
    if(button.dataset.correct === "true"){
      button.classList.add("correctt");
    }
   
   button.disabled =true;
  });
  nextbtn.classList.remove('hide');
}

nextbtn.addEventListener('click', ()=>{
  if(currentQuizeIndex < questions.length){
    continueToNext();
  }else{
    startQuize();
  }
})

function continueToNext(){
  currentQuizeIndex++;
  if(currentQuizeIndex < questions.length){
    startQuize();
  }else{
    showScore();
  }
}

function showScore(){
  resetprev();
  questionSection.innerHTML=`You scored ${score} correct answers out off ${questions.length}!`

  nextbtn.classList.add('hide');
  restartbtn.classList.remove('hide');

}

restartbtn.addEventListener('click', ()=>{
  questionSection.classList.add('hide')
  restartbtn.classList.add('hide');
  resetquize()
  
 
  
})

function  resetquize(){
  currentQuizeIndex= 0;
  score= 0;
  startbtn.classList.remove('hide');
}



const questions =[
  {
    question:"Which animal lays egg?",
    answers:[
      {text:"A. pig" ,correct:false},
      {text:"B. hen" ,correct:true},
      {text:"c. cat" ,correct:false},
      {text:"D. rat" ,correct:false}
    ]
  },

  {
    question:" What is the young one of a cow called?",
    answers:[
      {text:"puppy" ,correct:false},
      {text:"Kitten" ,correct:false},
      {text:"Calf" ,correct:true},
      {text:"Baby" ,correct:false}
    ]
  },

  {
    question:"Animals that suckle their young one are called?",
    answers:[
      {text:"Reptiles" ,correct:false},
      {text:"Birds" ,correct:false},
      {text:"Amphibians" ,correct:false},
      {text:"Mammals" ,correct:true}
    ]
  },

 {
    question:"What part of the plant conducts photosynthesis?",
    answers:[
      {text:"branch" ,correct:false},
      {text:"Root" ,correct:false},
      {text:"Leaf" ,correct:true},
      {text:"Stem" ,correct:false}
    ]
  },

  {
    question:" What is the boiling point of water?",
    answers:[
      {text:"100°C" ,correct:true},
      {text:"37°C" ,correct:false},
      {text:"300°C" ,correct:false},
      {text:"1000°C" ,correct:false}
    ]
  },

  {
    question:"Which is the largest land animal?",
    answers:[
      {text:"Dog" ,correct:false},
      {text:"Lion" ,correct:false},
      {text:"Tiger" ,correct:false},
      {text:"Elephant" ,correct:true}
    ]
  },

  {
    question:"When you push something, you apply?",
    answers:[
      {text:"Compression" ,correct:false},
      {text:"Force" ,correct:true},
      {text:"Mass" ,correct:false},
      {text:"Acceleration" ,correct:false}
    ]
  },

  {
    question:"Which animal from the below list is best adapted to the desert?",
    answers:[
      {text:"Tiger" ,correct:false},
      {text:"Camel" ,correct:true},
      {text:"Deer" ,correct:false},
      {text:"Dog" ,correct:false}
    ]
  },

  {
    question:"Which is the closest planet to the sun?",
    answers:[
      {text:"Venus" ,correct:false},
      {text:"Jupiter" ,correct:false},
      {text:"Earth" ,correct:false},
      {text:"Mercury" ,correct:true}
    ]
  },

  {
    question:"Sweet potato is an example of a modified?",
    answers:[
      {text:"Leaf" ,correct:false},
      {text:"Branch" ,correct:false},
      {text:"Stem" ,correct:false},
      {text:"root" ,correct:true}
    ]
  },

  {
    question:" What is the boiling point of water?",
    answers:[
      {text:"100°C" ,correct:true},
      {text:"37°C" ,correct:false},
      {text:"300°C" ,correct:false},
      {text:"1000°C" ,correct:false}
    ]
  },

  {
    question:"Which is the largest land animal?",
    answers:[
      {text:"Dog" ,correct:false},
      {text:"Lion" ,correct:false},
      {text:"Tiger" ,correct:false},
      {text:"Elephant" ,correct:true}
    ]
  },

  {
    question:"Which one is a fur-bearing animal?",
    answers:[
      {text:"Snake" ,correct:false},
      {text:"Cat" ,correct:true},
      {text:"Tortoise" ,correct:false},
      {text:"Hen" ,correct:false}
    ]
  },

  {
    question:"Which animal lays egg?",
    answers:[
      {text:"dog" ,correct:false},
      {text:"hen" ,correct:true},
      {text:"cat" ,correct:false},
      {text:"sheep" ,correct:false}
    ]
  },

  {
    question:"A male cow is called?",
    answers:[
      {text:"Calf" ,correct:false},
      {text:"OX" ,correct:true},
      {text:"Cow" ,correct:false},
      {text:"Monkey" ,correct:false}
    ]
  },

  {
    question:"Which one is a fur-bearing animal?",
    answers:[
      {text:"Snake" ,correct:false},
      {text:"Cat" ,correct:true},
      {text:"Tortoise" ,correct:false},
      {text:"Hen" ,correct:false}
    ]
  },

  {
    question:"Your hands have four fingers and a?",
    answers:[
      {text:"knee" ,correct:false},
      {text:"Thumb" ,correct:true},
      {text:"Ankle" ,correct:false},
      {text:"Elbow" ,correct:false}
    ]
  },

  {
    question:" What is the boiling point of water?",
    answers:[
      {text:"100°C" ,correct:true},
      {text:"37°C" ,correct:false},
      {text:"300°C" ,correct:false},
      {text:"1000°C" ,correct:false}
    ]
  },

  {
    question:"Which is the largest land animal?",
    answers:[
      {text:"Dog" ,correct:false},
      {text:"Lion" ,correct:false},
      {text:"Tiger" ,correct:false},
      {text:"Elephant" ,correct:true}
    ]
  },

  {
    question:"When you push something, you apply?",
    answers:[
      {text:"Compression" ,correct:false},
      {text:"Force" ,correct:true},
      {text:"Mass" ,correct:false},
      {text:"Acceleration" ,correct:false}
    ]
  },



]