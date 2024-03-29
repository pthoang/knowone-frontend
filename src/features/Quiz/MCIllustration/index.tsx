import { Button, Card, CardContent, Typography } from "@mui/material";
import { Question, Choice } from "../types";

interface MCIllustrationProps extends Question {
  nextQuestion: () => void;

}

const MCIllustration = ({ "xt/id": id, "question/choices": choices, "question/text": text, nextQuestion }:  MCIllustrationProps) => {
    return (
        <>
          <CardContent>
            {text}
            <Typography gutterBottom variant="h5" component="div">
              { (choices as Choice[]).map((choice, index) => 
                <Button key={index} variant="contained" onClick={nextQuestion} sx={{ mx: 2}}>{choice["text"]}</Button>) }
            </Typography>
          </CardContent>
        </> 
    )
} 
  
export default MCIllustration;
  

