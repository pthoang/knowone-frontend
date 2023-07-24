import { Button, Chip } from "@mui/material";

interface TraitSelectedProps {
    removeTrait: (value: number) => void;
    traitName: string;
    traitValue: number;
}
const TraitSelected = ({ removeTrait, traitName, traitValue }: TraitSelectedProps) => {
    return (
        <>
            <Chip label={traitName} onClick={() => removeTrait(traitValue)} sx={{ mx: 2}} />
        </> 
    )
} 
  
export default TraitSelected;