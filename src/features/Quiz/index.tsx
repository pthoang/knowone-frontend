import { useEffect, useState } from "react"
import MCIllustration from "./MCIllustration"
import MCStatement from "./MCStatement"
import MCTraitCloud from "./MCTraitCloud"
import './style.css'
import { Question } from "./types"

export default function Quiz() {
    const [questions, setQuestions] = useState<Question[]>([])
    
    useEffect(() => {
      fetch("http://192.168.50.218:3005/intro-questions")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            // setIsLoaded(true);
            // setItems(result);
            setQuestions(result.questions)
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

      const nextQuestion = () => (
        setIndex(indexCount + 1)
      )


    return (
        <> 
         <p> Fancy list of questions and options </p>
         
         {currentQuestion && 
         <>
          {currentQuestion["question/type"] === "mc/illustration" && <MCIllustration {...currentQuestion} nextQuestion={nextQuestion} />}
         </>
         } 

        {currentQuestion && 
         <>
          {currentQuestion["question/type"] === "mc/statement" && <MCStatement {...currentQuestion} nextQuestion={nextQuestion}/>}
         </>
         } 

        {currentQuestion && 
         <>
          {currentQuestion["question/type"] === "mc/trait-cloud" && <MCTraitCloud  {...currentQuestion} nextQuestion={nextQuestion}/>}
         </>
         } 

         
        
         </>
    ) 
  }
