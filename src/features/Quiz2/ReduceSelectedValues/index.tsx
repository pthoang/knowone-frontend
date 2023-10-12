import { Button, Chip } from '@mui/material';
import React, { useState } from 'react';

interface ReduceSelectedValuesProps {
    prevSelectedValues: string[],
    retry: () => void
}

const ReduceSelectedValues = ({ prevSelectedValues, retry }: ReduceSelectedValuesProps) => {
    const [values, setValues] = useState<string[]>(prevSelectedValues);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const selectNumbers = [Math.floor(prevSelectedValues.length/2), Math.floor(prevSelectedValues.length/4)];
   

    const addValue = (value: string) => {
        setSelectedValues([...selectedValues, value])
    }

    const removeValue = (value: string) => {
        setSelectedValues(selectedValues.filter(selectedValue => selectedValue != value))
    }

    const submitSelection = () => {
        setValues(selectedValues)
        setSelectedValues([])
        setCounter(counter + 1)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {counter < selectNumbers.length ?
                <>
                    Velg {selectNumbers[counter]}
                    {values.map(value => 
                        selectedValues.includes(value) ? 
                        <Chip key={value} label={value} onClick={() => removeValue(value)} />
                        :
                        <Chip key={value} label={value} variant="outlined" onClick={() => addValue(value)}/>
                    )} 
                    {selectedValues.length == selectNumbers[counter] && <Button onClick={submitSelection}>Neste</Button>}
                </>
                :
                <>
                    Dine verdier
                    {values.map(value => <Chip key={value} label={value} />)}
                    <Button style={{marginTop: '2rem'}} onClick={retry}>På nytt</Button>
                </>
            }
        </div>
    )
}

export default ReduceSelectedValues;