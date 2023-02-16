import Button from "@mui/material/Button/Button"
import { useEffect, useState } from "react"
import MCIllustration from "./MCIllustration"
import './style.css'
import { Question } from "./types"

export default function Quiz() {
    // const [questions, setQuestions] = useState([
    //   { 'question/text': 'cupcake or icecream', 'question/choice': [ 'cake', 'icecream' ]},
    //   { 'question/text': 'cupcake or chocolate',  'question/choice': [ 'cake', 'chocolate']},
    //   { 'question/text': 'cupcake or candy',  'question/choice': ['cake', 'candy', 'mint']}
    // ])
    const [questions, setQuestions] = useState<Question[]>([
  
    ])
    
    useEffect(() => {
      fetch("http://192.168.50.218:3000/intro-questions")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            // setIsLoaded(true);
            // setItems(result);
            setQuestions(result.questions)
            console.log(questions)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
            // setIsLoaded(true);
            // setError(error);
            // setQuestions()
          }
        )
      }, [])

      const [indexCount, setIndex] = useState(0);

      const currentQuestion = questions[indexCount]


    return (
        <> 
         <p> Fancy list of questions and options </p>
          
          {currentQuestion["question/choices"].map((answer: any, index) => (
            <>
              <MCIllustration {...currentQuestion}/> 
              <Button key={index} variant="contained" sx={{ mx: 2}} onClick={() => setIndex(indexCount + 1)}>{answer["statement/text"]}</Button>
            </>
      
          ))}
        
         </>
    ) 
  }
  