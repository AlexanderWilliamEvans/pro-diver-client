import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Fade, FormControl, FormLabel, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { RiEdgeLine, RiEditLine, RiSaveLine } from "react-icons/ri";
import { TbPencilCancel } from "react-icons/tb";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProfileForm {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  certifactionLevel: string,
} 
export const Profile = () => {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [profileForm, setProfileForm] = React.useState<ProfileForm>();
  const toggleEditMode = () => {
    setEditMode(!editMode);
  }
  React.useEffect(() => {

  }, [profileForm]);
    return (
        <>
        <Box>
            <div>
            <Typography variant="h5">Profile</Typography>
            <Divider />
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          User Settings
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
          <FormLabel>User Profile</FormLabel>
          <TextField label="FirstName" type="text" size='small' color='primary' defaultValue="Small" />
          <TextField label="LastName" type="text" size='small' color='primary' defaultValue="Small" />
          <TextField label="Email" type="text" size='small' color='primary' defaultValue="Small" />
          <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error" startIcon={<TbPencilCancel />}>CANCEL</Button>
          {
            editMode ? ( <Button startIcon={<RiSaveLine />} onClick={(e) => toggleEditMode()}>Save</Button>) :
            
            ( <Button variant="contained" startIcon={<RiEditLine />} onClick={(e) => toggleEditMode()}>Edit</Button>)
          }
          </Stack>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Dive profile
        </AccordionSummary>
        <AccordionDetails>
        
        </AccordionDetails>
      </Accordion>
          </div>
        </Box>
        </>
    )
}