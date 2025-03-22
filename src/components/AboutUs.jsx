import React from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Button } from '@mui/material';
import Image1 from '../assets/about-company-1.jpg'
import Image2 from '../assets/about-company-2.jpg'
import Image3 from '../assets/about-company-3.jpg'
import { AboutUsData } from './AboutUsData';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export const AboutUs = () => {
  const images = [Image1,Image2,Image3];
  const items = [
    'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit.',
    'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
    // 'Hello This is Sagar Mishra'
  ]

  return (
    <>
        <Grid container sx={{justifyContent:'space-evenly',pt:7}}>
            <Grid item lg={6}>
                <Typography gutterBottom sx={{
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // height:'100%',
                    // border:'2px solid black',
                    paddingLeft:10,
                    paddingTop:3,
                    color:'#606060',
                }}>
                    WHO WE ARE
                </Typography>
                <Typography variant='h4' gutterBottom fontWeight="bold" sx={{paddingLeft:10,}}>
                    Unleashing Potential with Creative Strategy
                </Typography>
                <Typography variant='body1' gutterBottom fontStyle="italic" sx={{paddingLeft:10,}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <AboutUsData items={items}/>
            </Grid>
            <Grid container lg={5} 
                sx={{ display:"flex", justifyContent:"center",alignItems:"center"}}
            >
                <Grid item xs={6} >
                    <Box sx={{marginRight:1}}> 
                        <img src={images[0]} alt="large-img" style={{ width: '100%', height:'100%', borderRadius: 15,}} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Box sx={{marginRight:2}}>
                            <img src={images[1]} alt="small-img-1" style={{ width: '100%',height:'100%', borderRadius: 15, margin:5}} />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{marginRight:2}}>
                            <img src={images[2]} alt="small-img-2" style={{ width: '100%',height:'100%', borderRadius: 15, margin:5}} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Button sx={{
            bgcolor: 'rgb(94, 230, 4)',
            color: 'white',
            px: 2.5,
            py: 1,
            ml: 15,
            mt: 4,
            // display: 'flex',
            // alignItems: 'center',
            '&:hover': {
              bgcolor: 'rgb(82, 189, 11)',
              '& .icon': {
                transform: 'translateX(5px)',
              },
            },
        }}>
            Read More
            <EastOutlinedIcon className="icon"
                sx={{
                pl: 1,
                fontSize: 21,
                transition: 'transform 0.3s ease',
                }}
            />
        </Button>
    </>
  );
};
