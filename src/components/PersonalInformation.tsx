import { Typography, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent, useEffect, useState } from "react";
import { UserTypes } from "../types/user.types";

interface IPersonalInformationProps {
  user: UserTypes
  setUser: Function

}


const PersonalInformation: FunctionComponent<IPersonalInformationProps> = ({
  user,
  setUser
}) => {
  const [newUser, setNewUser] = useState(user);

  const handleAddUser = (e: any, type: string) => {
    switch (type) {
      case 'firstName':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;
      case 'lastName':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value?.toUpperCase() });

        break;
      case 'email':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
        break;
      case 'phoneNumber':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
        break;
      case 'address':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
        break;
      case 'city':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
        break;
      case 'province':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;
      case 'postalCode':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value?.toUpperCase() });
        break;
      case 'summary':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
        break;
      case 'technicalExperience':
        setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
        break;
      case 'skillSet':
        let temp = new Array()
        temp = (e?.target?.value[0]?.toUpperCase() + e?.target?.value?.substring(1))?.split(",")
        setNewUser({ ...newUser, [e?.target?.name]: !e?.target?.value ? null : temp });
        break;


    }
  };
  useEffect(() => {
    if (newUser) {
      setUser({ ...newUser });
    }
  }, [user, newUser]);

  return <>
    <Box component="form" noValidate onChange={e => handleAddUser(e, (e?.target as HTMLTextAreaElement)?.name)}>
      <Typography variant="h6" gutterBottom>
        Your Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="first-name"
            variant="standard"
            // inputProps={{ style: { textTransform: 'capitalize' } }}
            value={newUser?.firstName || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="last-name"
            variant="standard"
            // inputProps={{ style: { textTransform: 'capitalize' } }}
            value={newUser?.lastName || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone"
            fullWidth
            inputProps={{ maxLength: 10 }}
            autoComplete="phone-number"
            variant="standard"
            value={newUser?.phoneNumber || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={newUser?.email || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="address-line"
            variant="standard"
            value={newUser?.address || ""}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
            inputProps={{ style: { textTransform: 'capitalize' } }}
            value={newUser?.city || ""}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="province"
            name="province"
            label="Province/Territory"
            fullWidth
            inputProps={{ maxLength: 2 }}
            variant="standard"
            value={newUser?.province || ""}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            label="Postal code"
            fullWidth
            autoComplete="postal-code"
            inputProps={{ maxLength: 6 }}
            variant="standard"
            value={newUser?.postalCode || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ style: { textTransform: 'capitalize' } }}
            required
            InputProps={{
              minRows: 5,
            }}
            multiline
            id="summary"
            name="summary"
            label="Summary"
            fullWidth
            autoComplete="summary"
            variant="standard"
            value={newUser?.summary || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ style: { textTransform: 'capitalize' } }}
            InputProps={{
              minRows: 4,
            }}
            multiline
            id="technicalExperience"
            name="technicalExperience"
            label="Technical Experience"
            fullWidth
            autoComplete="technical-experience"
            variant="standard"
            value={newUser?.technicalExperience || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ style: { textTransform: 'capitalize' } }}
            InputProps={{
              minRows: 10,
            }}
            multiline
            id="skillSet"
            name="skillSet"
            label="Skill Set"
            fullWidth
            autoComplete="skill-Set"
            variant="standard"
            value={newUser?.skillSet || ""}
          />
        </Grid>
      </Grid>
    </Box>
  </>
}

export default PersonalInformation;
