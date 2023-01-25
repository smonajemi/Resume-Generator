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
import { EducationTypes } from "../../types/Education.types";
import List, { Item } from "../List";

interface IEducationEntriesProps {
  education: EducationTypes[];
}

const EducationEntries: FunctionComponent<IEducationEntriesProps> = ({
  education,
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
      marginBottom: 10,
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
  });
  return (
    <>
      <Text style={styles.text}>Education</Text>
      <Text style={styles.divider}></Text>
      {education?.map((val, i) => (
        <View style={styles.entryContainer} key={i}>
          <View style={styles.leftColumn}>

            <View style={styles.headerContainer}>
              <Text style={styles.title}>{val?.schoolName}</Text>
              <View style={styles.rightColumn}>
                <Text style={styles.date}>{val?.startDate}</Text>
              </View>
            </View>
          </View>
        </View>

      ))}
    </>
  );
};
export default EducationEntries;

