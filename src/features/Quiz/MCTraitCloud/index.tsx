import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Question, Choice } from "../types";
import TraitSelected from "./TraitSelected";
import TraitUnselected from "./TraitUnselected";

interface MCTraitCloudProps extends Question {
  nextQuestion: () => void;
}
const MCTraitCloud = ({ "xt/id": id, "question/choices": choices, "question/text": text, nextQuestion }:  MCTraitCloudProps) => {
    const [selectedTraits, setTrait] = useState<number[]>([])

    const limitCheck = () => (selectedTraits.length === 3)

    const addTrait = (traitValue: number) => {
        setTrait([...selectedTraits, traitValue])
    }

    const removeTrait = (traitValue: number) => {
        setTrait(selectedTraits.filter(val => val !== traitValue))
    }

    return (
        <>
        <Card sx={{ maxWidth: 345, mx: 'auto', my: 2, background: 'darkgrey'}}>
            <CardContent>
                {text}
                <Typography gutterBottom variant="h5" component="div">
                    { (choices as Choice[]).map((choice, index) => 
                        <>
                            {selectedTraits.includes(index) ? (
                                <TraitSelected removeTrait={removeTrait} traitName={choice.text} traitValue={index} />
                            ) : (
                                <TraitUnselected addTrait={addTrait} traitName={choice.text} traitValue={index} disabled={limitCheck()}/>
                            )}   
                        </>   
                    )}
                </Typography>
            </CardContent>
        </Card>
        {limitCheck() && <Button variant="contained" onClick={nextQuestion} sx={{ mx: 2}}>Fortsett</Button>}
        </> 
    )
} 
  
export default MCTraitCloud;