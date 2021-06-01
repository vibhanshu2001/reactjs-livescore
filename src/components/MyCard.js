import { Button, Card, CardActions, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import React, {Fragment, useState} from 'react'
import { getMatchDetails } from '../api/Api';
import vsimage from '../img/vs.png'
const MyCard = ({match}) => {
    const [detail,setDetail]=useState({});
    const [open,setOpen]= useState(false);
    const handleClick=(id)=>{
        getMatchDetails(id).then((data)=> {console.log("Match Data",data);
        setDetail(data);
        handleOpen();
        
    })
        .catch((error)=>console.log(error))
    }
    const getMatchCard=()=>{
        return (
            <Card style={{marginTop:20}} elevation={4}>
                <CardContent>
                <Grid container justify="center" spacing={4} alignItems='center'>
                    <Grid item>
                        <Typography variant="h5">{match['team-1']}</Typography>
                    </Grid>
                    <Grid item>
                        <img style={{width:85}} src={vsimage} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{match['team-2']}</Typography>
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button onClick={()=>{
                        handleClick(match.unique_id)
                    }} variant="contained" color="primary">
                        Show Details
                    </Button>
                    <Button style={{marginLeft:5}} variant="outlined" color="primary">
                        Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" contentStyle={{
            width: '80%',
            maxWidth: 'none',
         }}>
            <DialogTitle id="alert-dialog-title">
                {"Match Details"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                        {detail.stat}
                    </Typography>
                    <Typography>
                        Match <span style={{fontStyle:"italic", fontWeight:"bold"}}>{detail.matchStarted?"Started":"Still not started"}{" "}</span>
                    </Typography>
                    <Typography>
                        Score
                        <span style={{fontStyle:"italic", fontWeight:"bold"}}>{" "}{detail.score}</span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
    return <Fragment>
        {getMatchCard()}
        {getDialog()}
    </Fragment>;
}
export default MyCard;