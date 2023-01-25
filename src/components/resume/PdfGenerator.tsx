import React, { FunctionComponent } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { UserTypes } from "../../types/user.types";
import { JobExperience } from "../../types/jobExperience.types";
import { Box, Divider } from "@mui/material";
import { validateHeaderValue } from "http";
import List, { Item } from "../List";
import { padding } from "@mui/system";
import EducationEntries from "./EducationEntries";
import { EducationTypes } from "../../types/Education.types";
import ExperienceEntries from "./ExperienceEntries";
import PersonalInfoEntries from "./PersonalInfoEntries";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  // header: {
  //   fontSize: 14,
  //   textAlign: "center",

  // },
  text: {
    fontSize: 14,

    fontFamily: "Times-Roman",
    justifyContent: "center",
    display: "flex",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 10,
    marginTop: 3,
    textAlign: "center",
    color: "grey",
  },
  divider: {
    borderTop: "3px solid #bbb",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
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
  date: {
    fontSize: 11,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 2,
  },
  center: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 5,
    textAlign: "center",
    color: "grey",
    padding: 3,
  },
  summary: {
    display: "flex",
    justifyContent: "flex-start",
  },
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  detailContainer: {
    flexDirection: "row",
  },
  points: {
    padding: "5em",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
});

const personalData = [
  {
    firstName: "Sina",
    lastName: "Monajemi",
    address:
      "Richmond Hill, ON, L4B0H4 - +1-647-466-5659 - sina.monajemi@me.com",
    summary:
      "Committed professional offering more than 3 years of experience in software development. Excellent communication skills and exceptional problem-solving abilities both in team-oriented and self-motivated settings.",

    jobDetail: ["1", "2", "3"],
  },
];

const jobExperienceData = [
  {
    jobTitle: "Software Developer",
    company: "Freelance",
    startDate: "March 2020",
    endDate: "Current",
    jobDetail: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam"],
    city: "Toronto",
    province: "ON",
  },
  {
    jobTitle: "Junior Software Developer",
    company: "BPTN",
    startDate: "July 2021",
    endDate: "June 2022",
    jobDetail: [" quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur", "llo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio"],
    city: "Toronto",
    province: "ON",
  }
];

const educationEntriesData = [
  {
    program: 'string',
    schoolName: 'string',
    startDate: 'string',
    endDate: 'string',
    city: 'string',
    province: 'string',
  },
  {
    program: 'string',
    schoolName: 'string',
    startDate: 'string',
    endDate: 'string',
    city: 'string',
    province: 'string',
  },
];

interface IPdfGeneratorProps {
  experienceData: JobExperience[];
  educationData: EducationTypes[];
  userData: UserTypes
}

const PdfGenerator: FunctionComponent<IPdfGeneratorProps> = ({
  experienceData,
  educationData,
  userData
}) => {
  console.log("userData", userData)

  return (
    <Document>
      <Page style={styles.body}>
        <>
          <View>
            <PersonalInfoEntries userInfo={userData} />
          </View>
          <View>
            <ExperienceEntries jobExperience={experienceData} />
          </View>
          <View>
            <EducationEntries education={educationData} />
          </View>
        </>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PdfGenerator;
