import { Box, Grid, Typography, Card, CardContent, Icon } from "@mui/material"
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import CycloneOutlinedIcon from '@mui/icons-material/CycloneOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export const Services = () => {
    const cardData = [
        { 
            icon: <MonitorHeartOutlinedIcon fontSize="large"/>, 
            header: 'Nesciunt Mete', 
            body: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' 
        },
        { 
            icon: <AddToQueueOutlinedIcon fontSize="large"/>, 
            header: 'Eosle Commodi', 
            body: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.' 
        },
        { 
            icon: <CycloneOutlinedIcon fontSize="large"/>, 
            header: 'Ledo Markt', 
            body: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.' 
        },
        { 
            icon: <AllInclusiveOutlinedIcon fontSize="large"/>, 
            header: 'Asperiores Commodit', 
            body: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.' 
        },
        { 
            icon: <CommentOutlinedIcon fontSize="large"/>, 
            header: 'Velit Doloremque', 
            body: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.' 
        },
        { 
            icon: <CalendarMonthOutlinedIcon fontSize="large"/>, 
            header: 'Dolori Architecto', 
            body: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.' 
        },
      ];

      const ServicesCard = ({ icon, header, body }) => (
        <Card sx={{ minWidth: 268, height:275,
            margin: 1, 
            boxShadow: '8px 8px 90px rgba(0, 0, 0, 0.2)', 
            cursor:'pointer',
            borderRadius: 3,
            p:3,
        }}>
          <CardContent>
            <Icon sx={{
                // border:'2px solid green',
                p:3,
                borderRadius:'50%',
                color:'white',
                bgcolor:'rgb(82, 189, 11)',
                mb:3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // fontSize:''
            }}>{icon}</Icon>
            <Typography gutterBottom variant="h5" fontWeight="bold" component="div" sx={{mb:2}}>
              {header}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{mb:3}}>
              {body}
            </Typography>
          </CardContent>
        </Card>
      );
    return (
        <Box >
            {/* Services */}
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
                    mt:10,
                    bgcolor:'rgb(219, 219, 219)',
                    color:'rgb(82, 189, 11)',
                    borderRadius:5,
                    fontWeight:"bold"
                }}>Services</Typography>
            </Box>

            {/* Check our Services */}
            <Box sx={{
                justifyContent:'center',
                display:'flex',
                alignItems:'center',
                m:1,
            }}>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', }}>Check our </Typography>
                <Typography variant="h4" sx={{fontWeight:"bold", display:'inline-block', pl:1, color:'rgb(82, 189, 11)' }}>Services</Typography>
            </Box>

            {/* Cards */}
            <Box sx={{ flexGrow: 1, padding: 2, mx:7 }}>
                <Grid container spacing={2}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ServicesCard icon={card.icon} header={card.header} body={card.body} />
                    </Grid>
                ))}
                </Grid>
            </Box>
        </Box>
        
    )
}
