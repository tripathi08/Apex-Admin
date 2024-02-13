import { Typography,Box,useTheme } from "@mui/material";

import React from 'react'

const Header = ({title,subtitle}) => {
    const theme=useTheme();
  return (
    <Box m="0.5rem 0 0 1.5rem">
        <Typography variant="h2" color={theme.palette.secondary[300]} fontWeight="bold" sx={{mb: "5px"}}>
         {title}
        </Typography>
        <Typography variant="h5" color={theme.palette.secondary[500]}>
         {subtitle}
        </Typography>
    </Box>
  )
}

export default Header;
