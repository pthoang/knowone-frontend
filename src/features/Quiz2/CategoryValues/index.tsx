import { Button, Chip } from "@mui/material";
import React, { useState } from "react";

interface Value {
    id: string,
    name: string,
    description: string,
    definition: string,
    category: string,
}

interface CategoryValuesProps {
    values: Value[],
    nextCategoryIndex: (values: string[]) => void,
    selectNumber: number,
}

const CategoryValues = ({ values, nextCategoryIndex, selectNumber}: CategoryValuesProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])

    const addValue = (value: string) => {
        selectedValues.length < selectNumber &&
        setSelectedValues([...selectedValues, value])
    }

    const removeValue = (value: string) => {
        setSelectedValues(selectedValues.filter(selectedValue => selectedValue != value))
    }

    const submitSelection = () => {
        setSelectedValues([])
        nextCategoryIndex(selectedValues)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            Velg {selectNumber}
            {values.map(value =>
                selectedValues.includes(value.name) ? 
                        <Chip key={value.id} label={value.name} onClick={() => removeValue(value.name)} />
                        :
                        <Chip key={value.id} label={value.name} variant="outlined" onClick={() => addValue(value.name)}/>
                    
            )}

            {selectedValues.length == selectNumber && <Button onClick={submitSelection}>Neste</Button>}
        </div>
    )
}

export default CategoryValues;
