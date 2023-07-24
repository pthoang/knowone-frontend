import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { StatementChoice } from "../types";
import { Question, Choice } from "../types";
import TraitSelected from "./TraitSelected";
import TraitUnselected from "./TraitUnselected";

export interface MCTraitCloudProps extends Question {
    'question/choices': Choice[] | StatementChoice [],
    nextQuestion: () => void;
}
const MCTraitCloud = ({ "xt/id": id, "question/choices": choices, "question/text": text, nextQuestion }:  MCTraitCloudProps) => {
    const [selectedTraits, setTrait] = useState<number[]>([])

    const minCheck = () => (selectedTraits.length >= 2)

    const addTrait = (traitValue: number) => {
        setTrait([...selectedTraits, traitValue])
    }

    const removeTrait = (traitValue: number) => {
        setTrait(selectedTraits.filter(val => val !== traitValue))
    }

    return (
        <>
        <CardContent>
            {text}
            <Typography gutterBottom variant="h5" component="div">
                { (choices as Choice[]).map((choice, index) => 
                    <React.Fragment key={index}>
                        {selectedTraits.includes(index) ? (
                            <TraitSelected removeTrait={removeTrait} traitName={choice.text} traitValue={index} />
                        ) : (
                            <TraitUnselected addTrait={addTrait} traitName={choice.text} traitValue={index}/>
                        )}   
                    </React.Fragment>   
                )}
            </Typography>
        </CardContent>
        {minCheck() && <Button variant="contained" onClick={nextQuestion} sx={{ mx: 2}}>Fortsett</Button>}
        </> 
    )
} 
  
export default MCTraitCloud;