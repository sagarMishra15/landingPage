import { Box, Button, FormControl, Grid, OutlinedInput, TextareaAutosize, TextField, Typography } from "@mui/material"
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const Contact = () => {
    return (
        <Box>
            {/* Contact */}
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
                }}>Contact</Typography>
            </Box>

            {/* Need Help? Contact Us */}
            <Box sx={{
                justifyContent:'center',
                display:'flex',
                alignItems:'center',
                m:2,
                mb:6
            }}>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', }}>Need Help? </Typography>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', pl:1, color:'rgb(82, 189, 11)' }}>Contact Us</Typography>
            </Box>

            <Grid container>
                <Grid item xs={12} md={4} sx={{
                    ml:7,
                }}
                >
                    {/* Address */}
                    <Box display="flex" alignItems="center" p={2} sx={{
                        '&:hover .icon': {
                        bgcolor: 'rgb(82, 189, 11)',
                        color: 'white',
                    }
                    }}>
                        <RoomOutlinedIcon className="icon" sx={{ 
                            mr: 3,
                            fontSize:30,
                            color:'rgb(82, 189, 11)',
                            bgcolor:'rgb(239, 248, 237)',
                            borderRadius: '50%',
                            transition: 'background-color 0.4s, color 0.4s', 
                            p:1}} />
                        <Box>
                            <Typography variant="h6">Address</Typography>
                            <Typography variant="body1">A108 Gandhi Marg, New Delhi - 110042</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" p={2} sx={{
                        '&:hover .icon': {
                        bgcolor: 'rgb(82, 189, 11)',
                        color: 'white',
                    }
                    }}>
                        <CallOutlinedIcon className="icon" sx={{ 
                            mr: 3,
                            fontSize:30,
                            color:'rgb(82, 189, 11)',
                            bgcolor:'rgb(239, 248, 237)',
                            borderRadius: '50%',
                            transition: 'background-color 0.4s, color 0.4s', 
                            p:1}} />
                        <Box>
                            <Typography variant="h6">Call Us</Typography>
                            <Typography variant="body1">+91 7982978803</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" p={2} sx={{
                        '&:hover .icon': {
                        bgcolor: 'rgb(82, 189, 11)',
                        color: 'white',
                    }
                    }}>
                        <EmailOutlinedIcon className="icon" sx={{ 
                            mr: 3,
                            fontSize:30,
                            color:'rgb(82, 189, 11)',
                            bgcolor:'rgb(239, 248, 237)',
                            borderRadius: '50%',
                            transition: 'background-color 0.4s, color 0.4s', 
                            p:1}} />
                        <Box>
                            <Typography variant="h6">Email Us</Typography>
                            <Typography variant="body1">1998sagar15@gmail.com</Typography>
                        </Box>
                    </Box>

                </Grid>

                <Grid item xs={12} md={7} sx={{
                    // border:'1px solid red',
                    px:5
                }}>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField placeholder="Your Name" size="small" fullWidth sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                '&:hover fieldset': {
                                    borderColor: '#c4c4c4',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'rgb(82, 189, 11)',
                                    borderWidth: '1px',
                                },
                                },
                            }}/>
                            <TextField placeholder="Your Email" size="small" fullWidth sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                '&:hover fieldset': {
                                    borderColor: '#c4c4c4',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'rgb(82, 189, 11)',
                                    borderWidth: '1px',
                                },
                                },
                            }}/>
                        </Box>
                        <TextField placeholder="Subject" size="small" fullWidth sx={{outline: 'none',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                '&:hover fieldset': {
                                    borderColor: '#c4c4c4',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'rgb(82, 189, 11)',
                                    borderWidth: '1px',
                                },
                                },
                            }}/>
                        <TextareaAutosize
                            minRows={6}
                            placeholder="Message"
                            style={{ 
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '1rem',
                                lineHeight: '1.4375em',
                                letterSpacing: '0.00938em',
                                borderColor: '#c4c4c4',
                                padding: 10,
                                outline: 'none',
                                // color: '#c4c4c4',
                            }} 
                            onFocus={(e) => (e.target.style.borderColor = 'rgb(82, 189, 11)')}
                            onBlur={(e) => (e.target.style.borderColor = '#c4c4c4')}
                        />
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Button sx={{
                                border: '2px solid #69D720',
                                borderRadius:6,
                                width:170,
                                height:49,
                                marginTop:1,
                                backgroundColor:'#69D720',
                                color:'white',
                                '&:hover': {
                                        backgroundColor:'rgb(82, 189, 11)',
                                        border: '2px solid rgb(82, 189, 11)',
                                    },
                                }}>Send Message
                            </Button>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}