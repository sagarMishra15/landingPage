import * as React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import Image from '../assets/hero-img.png'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Home() {
  return (
    <Grid container sx={{
        height: "87vh",
        bgcolor: '#E9E9E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        // flexDirection:'column'        
    }} >
        <Grid item lg={5}>
            <Box>
                <Typography variant='h3' gutterBottom>My Business</Typography>
                <Typography gutterBottom sx={{color:'#474747'}}>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</Typography>
                    
                <Button sx={{
                    border: '2px solid #69D720',
                    borderRadius:6,
                    width:170,
                    height:49,
                    marginTop:3,
                    backgroundColor:'#69D720',
                    color:'white',
                    '&:hover': {
                            backgroundColor:'rgb(82, 189, 11)',
                            border: '2px solid rgb(82, 189, 11)',
                        },
                    }}>Getting Started
                </Button>
                <Button sx={{
                        borderRadius:6,
                        width:170,
                        height:49,
                        marginTop:3,
                        marginLeft:3,
                        border: '2px solid rgb(82, 189, 11)',
                        color:'rgb(82, 189, 11)',
                        '&:hover': {
                            color:'white',
                            backgroundColor:'rgb(82, 189, 11)',
                        },
                    }}>
                    <PlayCircleOutlineIcon sx={{
                        color:'success',
                        '&:hover': {
                            color:'white',
                        },
                    }}/>
                    <Typography sx={{marginLeft:1}}>Watch Now</Typography>
                </Button>
            </Box>
        </Grid>
        <Grid item lg={5}>
            <Box
                component="img"
                sx={{
                // height: 'auto',
                borderRadius: 2,
                marginLeft: 2,
                width:'100%'
                }}
                alt="Home Image"
                src={Image}
            />
        </Grid>
    </Grid>
  );
}