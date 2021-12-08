import { useState } from 'react';
import { Counter } from './Counter';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export function Movie({ name, poster, summary, rating,id,editbutton,deletebutton }) {
  const history=useHistory();
  const [show, setshow] = useState(true);
  
  const styles = { color: rating < 8 ? "crimson" : "green" };

  const summarystyle = { display: show ? "block" : "none" };
  return (
    <Card className="container">
      <img src={poster} alt={name} className="poster" />
      <CardContent>
      <div className="details">
        <p className="movie-name">{name} 
        <IconButton onClick={()=>setshow(!show)}  color="primary" aria-label="hide">
   {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
    </IconButton>{editbutton}
        <IconButton onClick={() =>
        {console.log(id);
        history.push("/movies/"+id);}} aria-label="Hide" color="primary">
        <InfoIcon />
       </IconButton>
       
      </p>
        <p className="movie-rating" style={styles}>⭐{rating}</p>
      </div>
      <p className="movie-summary" style={summarystyle}> <b>Summary:</b> {summary}</p>
      <CardActions>
      <Counter />{deletebutton}
      </CardActions>
      </CardContent>
    </Card>
  );
}
