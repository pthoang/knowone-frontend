import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Question, Choice } from "../types";

interface MCTraitCloudProps extends Question {
  nextQuestion: () => void;
}
const MCTraitCloud = ({ "xt/id": id, "question/choices": choices, "question/text": text, nextQuestion }:  MCTraitCloudProps) => {
    const [selectedTraits, setTrait] = useState([])

    return (
        <>
        <Card sx={{ maxWidth: 345, mx: 'auto', my: 2, background: 'darkgrey'}}>
            <CardContent>
                {text}
                <Typography gutterBottom variant="h5" component="div">
                    { (choices as Choice[]).map((choice, index) => 
                    // add 
                    // remove 
                    <Button key={index} variant="contained" onClick={() => console.log('bruh')} sx={{ mx: 2}}>{choice["text"]}</Button>) }
                </Typography>
            </CardContent>
        </Card>
        </> 
    )
} 
  
export default MCTraitCloud;