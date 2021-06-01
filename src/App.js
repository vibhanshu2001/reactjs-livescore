import React, {Fragment, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from './api/Api';
function App() {
  const [matches,setMatches]=useState([]);




  useEffect(() => {
    getMatches()
    .then((data)=>{
      setMatches(data.matches)
      console.log(data.matches)
    })
    .catch(error=>alert("Could not load data"));
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant="h3" style={{marginTop:20}}>Welcome to Live Match Details </Typography>
      
      <Grid container>
        <Grid sm="3">

        </Grid>
        <Grid sm="6">
          {matches.map((match)=>(
            // <Fragment key={match.unique_id}>
            //   {
            //   (match.type=='Twenty20'?<MyCard key={match.unique_id} match={match}></MyCard>:'')
            //   }
            // </Fragment>
            <MyCard key={match.unique_id} match={match}></MyCard>
          ))}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
