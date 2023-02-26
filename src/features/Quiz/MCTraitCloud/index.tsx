import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Question, Choice } from "../types";
import TraitSelected from "./TraitSelected";
import TraitUnselected from "./TraitUnselected";

interface MCTraitCloudProps extends Question {
  nextQuestion: () => void;
}
const MCTraitCloud = ({ "xt/id": id, "question/choices": choices, "question/text": text, nextQuestion }:  MCTraitCloudProps) => {
    const [selectedTraits, setTrait] = useState<string[]>([])


    // Add function

    // remove function

    return (
        <>
        <Card sx={{ maxWidth: 345, mx: 'auto', my: 2, background: 'darkgrey'}}>
            <CardContent>
                {text}
                <Typography gutterBottom variant="h5" component="div">
                    { (choices as Choice[]).map((choice, index) => 

                        <>
                            {selectedTraits.includes(choice.text) ? (
                                <TraitSelected />
                            ) : (
                                <TraitUnselected />
                            )}
                        </>                        
                    )}
                </Typography>
            </CardContent>
        </Card>
        </> 
    )
} 
  
export default MCTraitCloud;