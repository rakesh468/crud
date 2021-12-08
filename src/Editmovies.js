// edit part//
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export function Editmovies() {
    
    const { id } = useParams();
    //  const movie = movies[id];

// edit movie compress of two method GET and PUT method//
const [movie,setmovie]=useState(null)
useEffect(()=>{
  fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/newmovies/${id}`,{
    method:"GET"
  })
  .then((data)=>data.json())
  .then((mv)=>setmovie(mv))
},[id])

console.log(movie,id);
 return  movie ?<Updatemovies movie={movie}/> : "";
 
  
}
function Updatemovies({movie}){
 
  const [name, setname] = useState(movie.name);
  const [rating, setrating] = useState(movie.rating);
  const [summary, setsummary] = useState(movie.summary);
  const [poster, setposter] = useState(movie.poster);
  const history=useHistory();

  const editmovie = () => {
  const updatedmovie = {
    name, 
    poster, 
    rating, 
    summary
  };
  console.log(updatedmovie);
  
  fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/newmovies/${movie.id}`,{
    method:"PUT",
    body:JSON.stringify(updatedmovie),
    headers:{
      "Content-Type":"application/json"
    },
    }).then(()=>history.push("/movies"))
  };
  return (
    <div className="add-form">

      <TextField value={name} onChange={(event) => setname(event.target.value)} label="Enter the Name" variant="standard" />
      <TextField value={rating} onChange={(event) => setrating(event.target.value)} label="Enter the  Rating" variant="standard" />
      <TextField value={poster} onChange={(event) => setposter(event.target.value)} label="Enter URL" variant="standard" />
      <TextField value={summary} onChange={(event) => setsummary(event.target.value)} label="Enter the Summary" variant="standard" />
      <Button onClick={editmovie} color="primary" variant="contained">save</Button>
    </div>
  );



}