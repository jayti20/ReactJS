import React,{Component} from 'react'
const questions=[{
    Question1:  "Inside which HTML element do we put the JavaScript?" ,
    answers: [ {
        text: "<script>" ,correct: true
    },
  {
      text: "<scripting>" ,correct: false
  },
   { text:"<javascriot>" ,correct: false},
  {text:"<js>" ,correct:false}
  ]
  },
  

  {
    Question1:  "Where is the correct place to insert a JavaScript?" ,
    answers: [ {
        text: "Both the <head> section and the <body> section are correct " , correct: true
    },
  {
      text: "The <head> section" ,correct: false
  },
   { text:"The <body> section" ,correct: false},
  {text:"None" ,correct:false}
  ]
  },
  {
      Question1:"What is 2+1?",
      answers: [ {
          text:"1" ,correct:false
      },
    {text:"2" ,correct:false},
{
    text:"3" ,correct:true
},
{
    text:"4" ,correct:false
}]
  },
  {
      Question1:"What is 2*5?",
      answers: [ {
        text:"1" ,correct:false
    },
  {text:"10" ,correct:true},
{
  text:"3" ,correct:false
},
{
  text:"4" ,correct:false
}]
  }
  ]

class QuizApp extends Component{

    render(){
     return(
         <div></div>
     )
    }


}