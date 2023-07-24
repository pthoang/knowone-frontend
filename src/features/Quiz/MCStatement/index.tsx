import { Button, Card, CardContent, Typography } from "@mui/material";
import { Question, StatementChoice } from "../types";

interface MCStatementProps extends Question {
  nextQuestion: () => void;

}

const MCStatement = ({ "xt/id": id, "question/choices": choices, "question/text": text, nextQuestion }:  MCStatementProps) => {
    return (
        <>
            <CardContent>
                {text}
                <Typography gutterBottom variant="h5" component="div">
                { (choices as StatementChoice[]).map((choice, index) => 
                    <Button key={index} variant="contained" onClick={nextQuestion} sx={{ mx: 2}}>{choice["statement/text"]}</Button>) }
                </Typography>
            </CardContent>
        </> 
    )
} 
  
export default MCStatement;