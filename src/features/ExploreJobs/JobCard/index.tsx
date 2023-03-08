import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface JobProps {
    "xt/id": string;
    "job/title": string;
    "job/img": string;
    "job/short-description": string;
    "job/long-description": string;
} 

const JobCard = ({
    "xt/id": id,
    "job/title": title,
    "job/img": img,
    "job/short-description": shortDescription,
    "job/long-description": longDescription,
}:JobProps) => {
    const [expanded, setExpanded] = useState(false);

    const clickExpandButton = () => {
        setExpanded(!expanded)
    };

    return (
        <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardHeader title={title} />
            <CardMedia
                sx={{ height: 250 }}
                image="https://knowone.no/assets/images/home/brainstorming.svg"
                title={title}
            />
            <CardContent sx={{display: 'flex', flexDirection: 'column', rowGap: '1rem'}}>
                <Typography variant="body1" color="text.secondary">
                {shortDescription}
                </Typography>
                {expanded && 
                    <Typography variant="body1" color="text.secondary">
                        {longDescription}
                    </Typography>
                }
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <IconButton size='large' aria-label="expand" onClick={clickExpandButton}>
                    {expanded ?
                    <KeyboardArrowUpIcon fontSize='inherit' />
                    :
                    <KeyboardArrowDownIcon fontSize='inherit' />
                    }
                </IconButton>
            </CardActions>
        </Card>
    )

};

export default JobCard;