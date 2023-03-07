import { Button } from "@mui/material";

interface TraitSelectedProps {
    removeTrait: (value: number) => void;
    traitName: string;
    traitValue: number;
}
const TraitSelected = ({ removeTrait, traitName, traitValue }: TraitSelectedProps) => {
    return (
        <>
        <Button variant="contained" onClick={() => removeTrait(traitValue)} sx={{ mx: 2}}>{traitName}</Button>
        </> 
    )
} 
  
export default TraitSelected;