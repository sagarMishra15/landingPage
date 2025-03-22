import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import features from '../assets/features.svg'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export const Features = () => {
        const featuresData = ['Holiday Plan', 'Weekend Plan', 'Winter Plan', 'Summer Vacation', 'Family Trip', 'Family Picnic'];
        const FeaturesCard = ({content}) => (
        <Card 
            sx={{
                boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.2)', 
                cursor:'pointer',
                // borderRadius: 3,
                minWidth:250,
                '&:hover .icon': {
                    bgcolor: 'rgb(82, 189, 11)',
                    color: 'white',
                }
            }}>
            <CardContent>
                <Typography gutterBottom fontWeight="bold" component="div" sx={{fontSize: '18px'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center',mt:1 }}>
                        <CheckOutlinedIcon className="icon" sx={{ 
                            mr: 2, 
                            verticalAlign: 'middle', 
                            color:'rgb(82, 189, 11)',
                            // border:'1px solid black',
                            bgcolor:'rgb(239, 248, 237)',
                            borderRadius: 1,
                            transition: 'background-color 0.3s, color 0.3s',
                            p:0.2
                        }} />
                        {content}
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    )
    return (
        <Box 
            sx={{
                mt: 5, 
                bgcolor: '#f2f2f2',
                pb:10
            }}
        >
            {/* Features */}
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
                }}>Features</Typography>
            </Box>

            {/* Check our Features */}
            <Box sx={{
                justifyContent:'center',
                display:'flex',
                alignItems:'center',
                m:1,
            }}>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', }}>Check our </Typography>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', pl:1, color:'rgb(82, 189, 11)' }}>Features</Typography>
            </Box>

            {/* Content */}
            <Grid container>
                <Grid item xs={12} md={6} >
                    <Box component="img"
                        sx={{
                        height: '100%',
                        borderRadius: 2,
                        paddingLeft: 13,
                        width:480,
                        // border:'1px solid black', 
                        }}
                        alt="Features Image"
                        src={features}>
                    </Box>
                    
                </Grid>
                <Grid  xs={12} md={6} sx={{height:100}}>
                    <Box sx={{ flexGrow: 1, padding: 2, mx: 7 }}>
                        <Grid container spacing={2}>
                            {featuresData.map((content, index) => (
                            <Grid item xs={12} sm={6} md={6} key={index}>
                                <FeaturesCard content={content} />
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
    
}