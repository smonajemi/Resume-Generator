import { Typography, Grid, TextField, Box } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { UserTypes } from "../types/user.types";

interface IPersonalInformationProps {
  user: UserTypes;
  setUser: Function;
  isValidated: boolean
  setValidation: Function
}

const PersonalInformation: FunctionComponent<IPersonalInformationProps> = ({
  user,
  setUser,
  isValidated,
  setValidation
}) => {
  const [newUser, setNewUser] = useState(user);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleAddUser = (e: any, type: string) => {
    switch (type) {
      case "province":
        setNewUser({
          ...newUser,
          [e?.target?.name]: e?.target?.value?.toUpperCase(),
        });
        break;
      case "postalCode":
        setNewUser({
          ...newUser,
          [e?.target?.name]: e?.target?.value?.toUpperCase(),
        });
        break;
      case "skillSet":
        let temp = [];
        temp = (
          e?.target?.value[0]?.toUpperCase() + e?.target?.value?.substring(1)
        )?.split(",");
        setNewUser({
          ...newUser,
          [e?.target?.name]: !e?.target?.value ? null : temp,
        });
        break;
      case "phoneNumber":
        const phoneNumber = e?.target?.value;
        setNewUser({ ...newUser, [e?.target?.name]: phoneNumber });
        setPhoneNumberError(!/^\d+$/.test(phoneNumber));
        break;
      case "email":
        const email = e?.target?.value;
        setNewUser({ ...newUser, [e?.target?.name]: email });
        setEmailError(
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email)
        );
        break;
      default:
      setNewUser({ ...newUser, [e?.target?.name]: e?.target?.value });
    }
  };

  const handleCustomKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (newUser) {
      setUser({ ...newUser });
    }
    if (phoneNumberError || emailError) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  }, [phoneNumberError, emailError, user, newUser]);

  return <>
    <Box component="form" noValidate onChange={e => handleAddUser(e, (e?.target as HTMLTextAreaElement)?.name)} >
    <Typography variant="h6" gutterBottom style={{marginBottom: '2em'}}>
        Personal Information
      </Typography>
      <Grid container spacing={3} style={{ maxHeight: '25em', overflow: 'auto' }}>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="first-name"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            inputProps={{ style: { textTransform: 'capitalize' } }}
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
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            inputProps={{ style: { textTransform: 'capitalize' } }}
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
            autoComplete="phone-number"
            variant="outlined"
            inputProps={{
              maxLength: 10,
              pattern: "[0-9]*", // Only allow numeric values
            }}
            InputLabelProps={{ shrink: true }}
            value={newUser?.phoneNumber || ''}
            error={phoneNumberError}
            helperText={phoneNumberError ? "Please enter only numeric characters" : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            autoComplete="email"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newUser?.email || ""}
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            inputProps={{ style: { textTransform: 'capitalize' } }}
            label="Address line"
            fullWidth
            autoComplete="address-line"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
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
            variant="outlined"
            InputLabelProps={{ shrink: true }}
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
            variant="outlined"
            InputLabelProps={{ shrink: true }}
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
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newUser?.postalCode || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             disabled
             id="LinkedIn-prf"
             name="LinkedIn-prf"
             fullWidth
             autoComplete="LinkedIn"
             variant="outlined"
             InputLabelProps={{ shrink: true }}
             value={`https://www.linkedin.com/in/`}
          />
        </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="LinkedIn"
            name="LinkedIn"
            label="LinkedIn"
            fullWidth
            autoComplete="LinkedIn"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newUser?.LinkedIn || ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
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
            variant="outlined"
            InputLabelProps={{ shrink: true }}
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
            id="technicalSkill"
            name="technicalSkill"
            label="Technical Experience"
            fullWidth
            autoComplete="technical-experience"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newUser?.technicalSkill || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ style: { textTransform: 'capitalize' } }}
            InputProps={{
              minRows: 2,
            }}
            multiline
            id="skillSet"
            name="skillSet"
            label="Skill Set"
            fullWidth
            autoComplete="skill-Set"
            onKeyPress={(e: any) => { handleCustomKey(e) }} // prevent new line
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newUser?.skillSet || ""}
          />
          <Typography variant="caption">*separate by comma</Typography>
        </Grid>
      </Grid>
    </Box>
  </>
}

export default PersonalInformation;
