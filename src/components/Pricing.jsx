import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';

export const Pricing = () => {
    return (
        <Box>
            {/* Pricing */}
            <Box sx={{
                justifyContent:'center',
                    display:'flex',
                    alignItems:'center',
            }}>
                <Typography gutterBottom sx={{
                    width:100,
                    height:30,
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center',
                    mt:6,
                    bgcolor:'rgb(219, 219, 219)',
                    color:'rgb(82, 189, 11)',
                    borderRadius:5,
                    fontWeight:"bold"
                }}>Pricing</Typography>
            </Box>

            {/* Check our Pricing */}
            <Box sx={{
                justifyContent:'center',
                display:'flex',
                alignItems:'center',
                m:1,
                mb:6
            }}>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', }}>Check our </Typography>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', pl:1, color:'rgb(82, 189, 11)' }}>Pricing</Typography>
            </Box>

            {/* Content */}
            <Grid container 
                sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Grid item sx={{
                    // border:'2px solid blue'
                    mb:5
                }}>
                    <Card sx={{
                        minWidth:250,
                        minHeight:600,
                        mr:3,
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.1), -8px 0 8px -5px rgba(0, 0, 0, 0.1)',
                        '&:hover':{
                            transform: 'scale(1.09)',
                        },
                        // border:'2px solid blue'
                    }}>
                        <CardContent sx={{
                            pt:5,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                            // border:'2px solid red'
                        }}>
                            <Typography variant="h6" sx={{
                                fontWeight:'bold',
                                color:'#20c997',
                                mb:2
                            }}>
                                Free Plan
                            </Typography>

                            <Box sx={{
                                minWidth:'100%',
                                // border:'2px solid red',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'start',
                                flexDirection:'row',
                                // mb:5
                            }}>
                                
                                <CurrencyRupeeOutlinedIcon sx={{alignItems:'start',}}/>
                                <Typography variant="h4" sx={{ 
                                    fontFamily: 'Raleway, Arial, sans-serif',
                                    fontWeight:'bold'
                                 }}>0 </Typography>
                                <Typography variant="body1" sx={{alignSelf:'end', color:'#727372',pl:1}}>/ mo</Typography>
                            </Box>

                            <EnergySavingsLeafOutlinedIcon sx={{fontSize:70, my:7, color:'#20c997',}}/>
                            <Typography gutterBottom sx={{mb:1,  }} variant="body1">Aida dere</Typography>
                            <Typography gutterBottom sx={{mb:1,  }} variant="body1">Nec feugiat nisl</Typography>
                            <Typography gutterBottom sx={{mb:1,  }} variant="body1">Nulla at volutpat dola</Typography>
                            <Typography gutterBottom sx={{mb:1, textDecoration: 'line-through', color:'grey' }} variant="body1">Pharetra massa</Typography>
                            <Typography gutterBottom sx={{mb:1, textDecoration: 'line-through', color:'grey' }} variant="body1">Massa ultricies mi</Typography>
                            <Button sx={{
                                borderRadius:6,
                                width:160,
                                height:49,
                                marginTop:4,
                                // marginLeft:3,
                                border: '2px solid rgb(82, 189, 11)',
                                fontWeight:'bold',
                                fontSize:15,
                                color:'rgb(82, 189, 11)',
                                '&:hover': {
                                    color:'white',
                                    backgroundColor:'rgb(82, 189, 11)',
                                },
                            }}>Buy Now</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sx={{
                    // border:'2px solid blue'
                    mb:5
                }}>
                    <Card sx={{
                        minWidth:250,
                        minHeight:600,
                        mr:3,
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.1), -8px 0 8px -5px rgba(0, 0, 0, 0.1)',
                        '&:hover':{
                            transform: 'scale(1.09)',
                        },
                        // border:'2px solid blue'
                    }}>
                        <CardContent sx={{
                            pt:5,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                            // border:'2px solid red'
                        }}>
                            <Typography variant="h6" sx={{
                                fontWeight:'bold',
                                color:'#0dcaf0',
                                mb:2
                            }}>
                                Starter Plan
                            </Typography>

                            <Box sx={{
                                minWidth:'100%',
                                // border:'2px solid red',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'start',
                                flexDirection:'row',
                                // mb:5
                            }}>
                                <CurrencyRupeeOutlinedIcon sx={{alignItems:'start',}}/>
                                <Typography variant="h4" sx={{ 
                                    fontFamily: 'Raleway, Arial, sans-serif',
                                    fontWeight:'bold'
                                 }}>9k </Typography>
                                <Typography variant="body1" sx={{alignSelf:'end', color:'#727372',pl:1}}>/ mo</Typography>
                            </Box>

                            <SendOutlinedIcon sx={{fontSize:70, my:7, color:'#0dcaf0', transform: 'rotate(-45deg)'}}/>
                            <Typography gutterBottom sx={{mb:1,  }} variant="body1">Aida dere</Typography>
                            <Typography gutterBottom sx={{mb:1,  }} variant="body1">Nec feugiat nisl</Typography>
                            <Typography gutterBottom sx={{mb:1,  }} variant="body1">Nulla at volutpat dola</Typography>
                            <Typography gutterBottom sx={{mb:1,}} variant="body1">Pharetra massa</Typography>
                            <Typography gutterBottom sx={{mb:1, textDecoration: 'line-through', color:'grey' }} variant="body1">Massa ultricies mi</Typography>
                            <Button sx={{
                                borderRadius:6,
                                width:160,
                                height:49,
                                marginTop:4,
                                // marginLeft:3,
                                border: '2px solid rgb(82, 189, 11)',
                                fontWeight:'bold',
                                fontSize:15,
                                color:'rgb(82, 189, 11)',
                                '&:hover': {
                                    color:'white',
                                    backgroundColor:'rgb(82, 189, 11)',
                                },
                            }}>Buy Now</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sx={{
                    // border:'2px solid blue'
                    mb:5
                }}>
                    <Card sx={{
                        minWidth:250,
                        minHeight:600,
                        mr:3,
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.1), -8px 0 8px -5px rgba(0, 0, 0, 0.1)',
                        '&:hover':{
                            transform: 'scale(1.09)',
                        },
                        // border:'2px solid blue'
                    }}>
                        <CardContent sx={{
                            pt:5,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                            // border:'2px solid red'
                        }}>
                            <Typography variant="h6" sx={{
                                fontWeight:'bold',
                                color:'#fd7e14',
                                mb:2
                            }}>
                                Business Plan
                            </Typography>

                            <Box sx={{
                                minWidth:'100%',
                                // border:'2px solid red',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'start',
                                flexDirection:'row',
                                // mb:5
                            }}>
                                <CurrencyRupeeOutlinedIcon sx={{alignItems:'start',}}/>
                                <Typography variant="h4" sx={{ 
                                    fontFamily: 'Raleway, Arial, sans-serif',
                                    fontWeight:'bold'
                                 }}>19k </Typography>
                                <Typography variant="body1" sx={{alignSelf:'end', color:'#727372',pl:1}}>/ mo</Typography>
                            </Box>

                            <AirportShuttleOutlinedIcon sx={{fontSize:70, my:7, color:'#fd7e14',}}/>
                            <Typography gutterBottom sx={{mb:1,}} variant="body1">Aida dere</Typography>
                            <Typography gutterBottom sx={{mb:1,}} variant="body1">Nec feugiat nisl</Typography>
                            <Typography gutterBottom sx={{mb:1,}} variant="body1">Nulla at volutpat dola</Typography>
                            <Typography gutterBottom sx={{mb:1,}} variant="body1">Pharetra massa</Typography>
                            <Typography gutterBottom sx={{mb:1,}} variant="body1">Massa ultricies mi</Typography>
                            <Button sx={{
                                borderRadius:6,
                                width:160,
                                height:49,
                                marginTop:4,
                                // marginLeft:3,
                                border: '2px solid rgb(82, 189, 11)',
                                fontWeight:'bold',
                                fontSize:15,
                                color:'rgb(82, 189, 11)',
                                '&:hover': {
                                    color:'white',
                                    backgroundColor:'rgb(82, 189, 11)',
                                },
                            }}>Buy Now</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sx={{
                    // border:'2px solid blue'
                    mb:5
                }}>
                    <Card sx={{
                        minWidth:250,
                        minHeight:600,
                        mr:3,
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.1), -8px 0 8px -5px rgba(0, 0, 0, 0.1)',
                        '&:hover':{
                            transform: 'scale(1.09)',
                        },
                        // border:'2px solid blue'
                    }}>
                        <CardContent sx={{
                            pt:5,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                            // border:'2px solid red'
                        }}>
                            <Typography variant="h6" sx={{
                                fontWeight:'bold',
                                color:'#0d6efd',
                                mb:2
                            }}>
                                Ultimate Plan
                            </Typography>

                            <Box sx={{
                                minWidth:'100%',
                                // border:'2px solid red',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'start',
                                flexDirection:'row',
                                // mb:5
                            }}>
                                <CurrencyRupeeOutlinedIcon sx={{alignItems:'start',}}/>
                                <Typography variant="h4" sx={{ 
                                    fontFamily: 'Raleway, Arial, sans-serif',
                                    fontWeight:'bold'
                                 }}>29k </Typography>
                                <Typography variant="body1" sx={{alignSelf:'end', color:'#727372',pl:1}}>/ mo</Typography>
                            </Box>

                            <RocketOutlinedIcon sx={{fontSize:70, my:7, color:'#0d6efd',}}/>
                            <Typography gutterBottom sx={{mb:1, }} variant="body1">Aida dere</Typography>
                            <Typography gutterBottom sx={{mb:1, }} variant="body1">Nec feugiat nisl</Typography>
                            <Typography gutterBottom sx={{mb:1, }} variant="body1">Nulla at volutpat dola</Typography>
                            <Typography gutterBottom sx={{mb:1, }} variant="body1">Pharetra massa</Typography>
                            <Typography gutterBottom sx={{mb:1, }} variant="body1">Massa ultricies mi</Typography>
                            <Button sx={{
                                borderRadius:6,
                                width:160,
                                height:49,
                                marginTop:4,
                                // marginLeft:3,
                                border: '2px solid rgb(82, 189, 11)',
                                fontWeight:'bold',
                                fontSize:15,
                                color:'rgb(82, 189, 11)',
                                '&:hover': {
                                    color:'white',
                                    backgroundColor:'rgb(82, 189, 11)',
                                },
                            }}>Buy Now</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
