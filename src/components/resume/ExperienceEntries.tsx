import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  CardActionArea,
} from "@mui/material";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { JobExperience } from "../../types/jobExperience.types";
import List, { Item } from "../List";

interface IExperienceEntriesProps {
  jobExperience: JobExperience[];
}

const ExperienceEntries: FunctionComponent<IExperienceEntriesProps> = ({
  jobExperience,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      paddingLeft: 15,
      "@media max-width: 400": {
        paddingTop: 10,
        paddingLeft: 0,
      },
    },
    entryContainer: {
      marginBottom: 10,
    },
    date: {
      fontSize: 11,
    },
    detailContainer: {
      flexDirection: "row",
    },
    detailLeftColumn: {
      flexDirection: "column",
      marginLeft: 10,
      marginRight: 10,
    },
    detailRightColumn: {
      flexDirection: "column",
      flexGrow: 9,
    },
    bulletPoint: {
      fontSize: 10,
    },
    details: {
      fontSize: 10,
    },
    headerContainer: {
      flexDirection: "row",
      marginBottom: 1,
    },
    leftColumn: {
      flexDirection: "column",
      flexGrow: 9,
    },
    rightColumn: {
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "flex-end",
      justifySelf: "flex-end",
    },
    title: {
      fontSize: 11,
      color: "black",
      textDecoration: "none",
      fontWeight: 'bold'
    },
    divider: {
      borderTop: '3px solid #bbb',
      marginTop: 3,
      marginBottom: 5,
    },
    text: {
      fontSize: 14,

      fontFamily: "Times-Roman",
      justifyContent: "center",
      display: 'flex',

    },
    subHeader: {
      fontSize: 8,
      marginBottom: 1.5
    }
  });
  return (
    <>
      <Text style={styles.text}>Experience</Text>
      <Text style={styles.divider}></Text>
      {jobExperience?.map((val, i) => (
        <View style={styles.entryContainer} key={i}>
          <View style={styles.leftColumn}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{val?.jobTitle}</Text>
              <View style={styles.rightColumn}>
                <Text style={styles.date}>{val?.startDate}</Text>
              </View>
            </View>
            <Text style={styles.subHeader}>{val?.company} - {val?.city}, {val?.province}</Text>
          </View>
          <List>
            {val?.jobDetail?.map((detail: any, i: any) => (
              <Item key={i} style={styles.detailContainer}>
                {detail}
              </Item>
            ))}
          </List>
        </View>
      ))}
      {/*       
        <View style={styles.leftColumn}>
          <Text style={styles.text}>Experience</Text>
          <Text style={styles.divider}></Text>
          <View style={styles.headerContainer}>
          <Text style={styles.text}>Freelance Developer</Text>
          <View style={styles.rightColumn}>
            <Text style={styles.date}>March 2020</Text>
          </View>
        </View>
        </View>
        <View style={styles.leftColumn}>
          <Text style={styles.text}>BPTN - Toronto, ON</Text>
        </View>
        <List>
            {jobDetail?.map((detail, i) => (
            <Item key={i} style={styles.detailContainer} >
            {detail}
          </Item>
            ))}
            </List>
        <View style={styles.leftColumn}>
          <Text style={styles.text}>Education</Text>
          <Text style={styles.divider}></Text>
        </View>
        <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.text}>Hospitality Management</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>March 2020</Text>
        </View>
        </View>
        <View style={styles.leftColumn}>
          <Text style={styles.text}>Seneca College - Toronto, ON</Text>
        </View> */}

    </>
  );

};



export default ExperienceEntries;
