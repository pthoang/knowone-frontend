import React, { useState } from 'react'
import useGetValues from './hooks/useGetValues'
import CategoryValues from './CategoryValues'
import { Button, Chip } from '@mui/material'
import ReduceSelectedValues from './ReduceSelectedValues'


const Quiz2 = () => {
    const [categoryIndex, setCategoryIndex] = useState<number>(0)
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const SELECT_NUMBER = 2
    
    const { values } = useGetValues()
    const categories = values.categories
    

    const nextCategoryIndex = (newValues: string[]) => {
        setSelectedValues(values => values.concat(newValues) )
        setCategoryIndex(index => index + 1)
    }

    const retry = () => {
        setSelectedValues([])
        setCategoryIndex(0)
    }

    const shouldReduceSelectedValues = selectedValues.length < (categories.length * SELECT_NUMBER)

    console.log(shouldReduceSelectedValues)
    return (
        <>
            {shouldReduceSelectedValues ?
                <>
                    <CategoryValues
                        values={values.allValues.filter(value => value.category == categories[categoryIndex])}
                        nextCategoryIndex={nextCategoryIndex}
                        selectNumber={SELECT_NUMBER}
                    />
                    <div style={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '2rem',
                        maxWidth: '480px',
                        marginTop: '3rem',
                        flexFlow: 'wrap'}}
                    >
                        {selectedValues.map(value => <Chip key={value} label={value} />)}
                    </div>
                </>
                :
                <>
                    <ReduceSelectedValues prevSelectedValues={selectedValues} retry={retry} />
                </>
            }
        </>
    )
}

export default Quiz2;