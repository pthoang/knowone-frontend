import { Button, Chip } from "@mui/material";

interface TraitUnselectedProps {
    addTrait: (value: number) => void;
    traitName: string;
    traitValue: number;
}
const TraitUnselected = ({addTrait, traitName, traitValue}: TraitUnselectedProps) => {
    return (
        <>
        <Chip label={traitName} variant="outlined" onClick={() => addTrait(traitValue)} sx={{ mx: 2}} />
        </> 
    )
} 
  
export default TraitUnselected;