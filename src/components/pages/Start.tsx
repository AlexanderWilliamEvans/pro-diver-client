import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { shadows } from '@mui/system';
import { Divider, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: '100%',
  height: '500px',
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export const Start = () => {

    return (
       <>
          <Box sx={{ width: '100%' }}>
          <Stack direction="row" spacing={2}>
        <Item>
          <Typography variant='h5'>Recent Dives</Typography>
          <Divider />
        </Item>
        <Item>
        <Typography variant='h5'>Dive Profile</Typography>
        <Divider />
        </Item>
        <Item>
        <Typography variant='h5'>Explore diving</Typography>
        <Divider />
        </Item>
      </Stack>
    </Box>
       </>
    )
}