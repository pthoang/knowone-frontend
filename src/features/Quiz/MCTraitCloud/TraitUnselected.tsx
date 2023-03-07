import { Button } from "@mui/material";

interface TraitUnselectedProps {
    addTrait: (value: number) => void;
    traitName: string;
    traitValue: number;
    disabled: boolean;
}
const TraitUnselected = ({addTrait, traitName, traitValue, disabled}: TraitUnselectedProps) => {
    return (
        <>
        <Button variant="outlined" disabled={disabled} onClick={() => addTrait(traitValue)} sx={{ mx: 2}}>{traitName}</Button>
        </> 
    )
} 
  
export default TraitUnselected;