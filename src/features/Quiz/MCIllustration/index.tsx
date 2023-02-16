import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Question, Choice } from "../types";

const MCIllustration = ({ "question/choices": choices, "xt/id": id }:  Question) => {
    return (
        <>
        <Card sx={{ maxWidth: 345, mx: 'auto', my: 2, background: 'darkgrey'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://knowone.no/assets/images/reviews/reviews.svg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { (choices as Choice[]).map((choice) => <img alt="nei" src={`${choice["img"]}`}/>) }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </> 
    )
} 
  
export default MCIllustration;
  

