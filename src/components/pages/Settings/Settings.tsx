import { Save, SaveAlt } from "@mui/icons-material";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export const Settings = () => {

    return (
      <>
            <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }}}
      noValidate
      autoComplete="off"
    >
        <Stack direction={"column"} spacing={2} sx={{margin: "16px", marginTop: "24px" }}>
            <Typography variant="h4">Login</Typography>
            <Divider />
        <TextField
          id="standard-username-input"
          label="Username"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button variant="contained" startIcon={<SaveAlt />} color="primary" sx={{width: "150px", float: "right"}}>Save</Button>
        </Stack>
    </Box>
      </>
    )
}