import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export const AboutUsData = ({items}) => {
    return (
        <Box>
            {items.map((item, index) => (
                <Typography key={index} variant="body1" gutterBottom pl={10} py={1}>
                    <TaskAltOutlinedIcon style={{ verticalAlign: 'middle', marginRight: 4, color:'rgb(82, 189, 11)',}} />
                    {item}
                </Typography>
            ))}
        </Box>
    );
}