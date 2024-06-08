import { Button, Stack, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Destination({ data }) {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Stack 
      direction={isSmUp ? "row" : "column"} 
      justifyContent={"space-between"} 
      spacing={isSmUp ? 3 : 4}
    >
      <Box
        sx={{
          width: isSmUp ? '300px' : '100%',
          height: '200px',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <img 
          src={`/${data.packageImage}`} 
          alt="" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </Box>

      <Stack 
        direction={"column"} 
        spacing={isSmUp ? 5 : 2} 
        width={"100%"}
      >
        <Stack 
          direction={"column"} 
          width={"100%"} 
          spacing={1}
        >
          <Typography color={"gray"} variant='body2'>
            {data.packageDuration} | Full day tour
          </Typography>
          <Typography variant='subtitle2'>
            {data.packageDesc}
          </Typography>
          <Stack 
            direction={"row"} 
            spacing={1} 
            alignItems={"center"}
          >
            <LocationOnIcon style={{ fill: "teal", fontSize: "1rem" }} />
            <Typography variant='body2'>
              {data.packageCountry}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction={"column"} gap={1}>
          <Typography variant='body2' color={"gray"}>
            Taking Safety Measures
          </Typography>
          <Typography variant='subtitle2' color={"teal"}>
            Free Cancellation
          </Typography>
        </Stack>
      </Stack>

      <Stack 
        direction={isSmUp ? 'column' : 'row'} 
        alignItems={isSmUp ? "end" : "center"} 
        gap={2} 
        justifyContent={isSmUp ? "flex-end" : "space-between"}
        sx={{ mt: isSmUp ? 0 : 2 }}
      >
        {
            isFavorite ? <FavoriteIcon  onClick={()=>setIsFavorite(prev=>!prev)} style={{ fontSize: "1.2rem",fill:"red"}}/> :  <FavoriteBorderIcon onClick={()=>setIsFavorite(prev=>!prev)} style={{ fontSize: "1.2rem"}} />
        }

        <Typography variant='body1'>
          &#36; {data.packagePrice}<br/>
          <Typography variant='body2' color={"gray"}>
            Per Adult
        </Typography>
        </Typography>

        <Button 
          variant='contained' 
          style={{ backgroundColor: "teal", fontSize: "0.7rem", whiteSpace: "nowrap" }}
        >
          View Detail
        </Button>
      </Stack>
    </Stack>
  );
}
