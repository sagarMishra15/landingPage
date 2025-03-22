import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material"
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export const FAQs = () => {
    const faqData = [
        { question: "What are the most surreal places to visit?", answer: "Some of the strangest places on earth are also the most sublime: from the UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in Yellowstone to a bridge in Germany that looks like a leftover prop from Lord of the Rings." },
        { question: "Do I need any vaccinations?", answer: "For most of our destinations, you don’t need any specific vaccinations however it's always good to check with your doctor to make sure you have an up-to-date tetanus jab." },
        { question: "What kind of accommodation do we stay in?", answer: "Our accommodation is mainly in twin share accommodation in some awesome hotels. You will always be sharing a room with someone from your group. We do sometimes stay in dorm/hostel style accommodation which will be exclusive to our tour group." },
        { question: "Will my trip be cancelled if someone on my tour group gets sick?", answer: "If someone gets sick while travelling, we are not expecting the tour to be cancelled, however it will depend on the specific situation as we will need to follow the advice of local government and health authorities." },
        { question: "Do I need any vaccinations?", answer: "For most of our destinations, you don’t need any specific vaccinations however it's always good to check with your doctor to make sure you have an up-to-date tetanus jab." },
    ];

    return (
        <Grid container sx={{
            bgcolor:'#E9E9E9',
            display:'flex',
            justifyContent:'center',
            // alignItems:'center',
            mt: 6,
            pb:5
        }}>
            <Grid xs={12} md={3} sx={{
                // border:'1px solid black', 
                pl:10,
                pt:5
            }}>
                <Typography variant="h4"  sx={{

                }}>
                    Frequently Asked
                </Typography>
                <Typography variant="h4" gutterBottom fontWeight='bold'>
                    Question 
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color:'grey'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </Typography>
            </Grid>

            <Grid xs={12} md={7} sx={{
                // border:'1px solid black',
                mt: 6,
                pl:6,
            }}>
                {faqData.map((item, index) => (
                    <Box key={index} sx={{ mb: 2,}}>
                        <Accordion  
                            sx={{ transition: 'height 0.9s ease' }}
                        >
                            <AccordionSummary
                                expandIcon={<NavigateNextOutlinedIcon />}
                            >
                                <Typography variant="h6" sx={{ 
                                    minHeight:30,
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    // fontWeight:'bold',
                                    // border:'1px solid black',
                                    transition:'color 0.2s ease-in-out',
                                    '&:hover':{
                                        color:'rgb(82, 189, 11)'
                                    }
                                }}>
                                    <Box sx={{ color: 'rgb(82, 189, 11)', 
                                        pr:1, 
                                        fontFamily: 'Raleway, Arial, sans-serif', 
                                        fontWeight:'bold',
                                        }}>
                                            {`${index + 1}.`}
                                        </Box>
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))}
            </Grid>
        </Grid>
    )
}