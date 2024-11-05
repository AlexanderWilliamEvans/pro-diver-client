import React from "react";
import { DiveSiteMap } from "../Dives/Map/Map";
import { DiveTable } from "../Dives/DiveTable/DiveTable";
import { Divider, Stack, Typography } from "@mui/material";


export const DiveSites = () => {
    
    return (
      <>
        <Typography variant="h4">Divesites</Typography>
        <Divider />
        <Stack direction="row" spacing={2} sx={{marginTop: '16px'}}>    
      <DiveSiteMap />
      <DiveTable />
     </Stack> 
      </>

    )
}