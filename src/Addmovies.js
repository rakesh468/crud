import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Addmovies() {
  const history=useHistory()
  const [name, setname] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [poster, setposter] = useState("");

  const addmovies = () => {
    const newmovie = {
      name, poster, rating, summary
    };
    // console.log(newmovie);
    // setmovies([...movies, newmovie]);

    
    // using fetch to post or upadte the  data//
   fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/newmovies",{
    method:"POST",
    body:JSON.stringify(newmovie),
    headers:{
      "Content-Type":"application/json"
    }
    }).then(()=>history.push("/movies"))
  };
  return (
    <div  className="add-form">
     
      < TextField value={name} onChange={(event) => setname(event.target.value)} label="Enter the Name" variant="standard" />
      <TextField value={rating} onChange={(event) => setrating(event.target.value)} label="Enter the  Rating"variant="standard" />
      <TextField value={poster} onChange={(event) => setposter(event.target.value)} label="Enter URL" variant="standard" />
      <TextField value={summary} onChange={(event) => setsummary(event.target.value)} label="Enter the Summary"variant="standard" />
      <Button onClick={addmovies} color="primary" variant="outlined">Add movies</Button>
    </div>
  );
}


