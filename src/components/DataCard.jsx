import { Box, Grid, Typography } from "@mui/material"
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export const DataCard = () => {
    return (
        <Grid container sx={{
                bgcolor: '#E9E9E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                height:380,   
                padding:5, 
                // border:'2px solid grey'  
            }}>
            <Grid item  
                sx={{
                    backgroundColor:'white',
                    height:250,
                    width:270,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent:'center',
                    boxShadow: 5,
                    borderRadius: 2,
                    marginRight:1,
                    marginBottom:2,
                    cursor:'pointer',
                    flexDirection:'column' ,
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#69D720',
                        color: 'white',
                        // transform: 'scale(1.1)',
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                        },
                    }
                }}
            >
                    <DiamondOutlinedIcon sx={{
                        color: '#69D720',
                        fontSize:70,
                        // color: 'inherit',
                        '&:hover': { color: 'inherit' } 
                        }}/>
                    <Typography>My Typography 1</Typography>
                
            </Grid>
            <Grid item  
                sx={{
                    backgroundColor:'white',
                    height:250,
                    width:270,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent:'center',
                    boxShadow: 5,
                    borderRadius: 2,
                    marginRight:1,
                    marginBottom:2,
                    cursor:'pointer',
                    flexDirection:'column' ,
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#69D720',
                        color: 'white',
                        // transform: 'scale(1.1)',
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                        },
                    }
                }}
            >
                    <LocationOnOutlinedIcon sx={{
                        color:'#69D720',
                        fontSize:70,
                        '&:hover' : {
                            color:'white',
                            
                        },}}/>
                    <Typography>My Typography</Typography>
            </Grid>
            <Grid item  
                sx={{
                    backgroundColor:'white',
                    height:250,
                    width:270,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent:'center',
                    boxShadow: 5,
                    borderRadius: 2,
                    marginRight:1,
                    marginBottom:2,
                    cursor:'pointer',
                    flexDirection:'column' ,
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#69D720',
                        color: 'white',
                        // transform: 'scale(1.1)',
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                        },
                    }
                }}
            >
                    <LiveTvOutlinedIcon sx={{
                        color:'#69D720',
                        fontSize:65,
                        '&:hover' : {
                            color:'white',
                            
                        },}}/>
                    <Typography sx={{marginTop:1}}>My Typography</Typography>
            </Grid>
            <Grid item  
                sx={{
                    backgroundColor:'white',
                    height:250,
                    width:270,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent:'center',
                    boxShadow: 5,
                    borderRadius: 2,
                    marginRight:1,
                    marginBottom:2,
                    cursor:'pointer',
                    flexDirection:'column' ,
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#69D720',
                        color: 'white',
                        // transform: 'scale(1.1)',
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                        },
                    }
                }}
            >
                    <LightModeOutlinedIcon sx={{
                        color:'#69D720',
                        fontSize:65,
                        '&:hover' : {
                            color:'white',
                            
                        },}}/>
                    <Typography sx={{marginTop:1}}>My Typography</Typography>
                
            </Grid>
        </Grid>
    )
}