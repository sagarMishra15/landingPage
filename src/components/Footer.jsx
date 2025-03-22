import { Box, Typography } from "@mui/material"
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

export const Footer = () => {
    return (
        <Box sx={{
            bgcolor:'#E9E9E9',
            display:'flex',
            alignItems:'center',
            minHeight:150,
            mt:5,
            pt:5,
            flexDirection:'column'
        }}>
            <Box sx={{
                display:'flex',
                justifyContent:'center',

            }}>
                <CopyrightOutlinedIcon sx={{mr:0.5}}/>
                <Typography gutterBottom>Copyright</Typography>
                <Typography gutterBottom fontWeight='bold' mx={0.5}>Sagar Mishra</Typography>
                <Typography gutterBottom>All Rights Reserved</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center'
            }}>
                <FacebookOutlinedIcon/>
            </Box>
            <Box sx={{
                mt:1,
                display:'flex',
                justifyContent:'center'
            }}>
                <Typography>Designed By</Typography>
                <Typography fontWeight='bold' mx={0.5}>Sagar Mishra</Typography>
            </Box>
        </Box>
    )
}