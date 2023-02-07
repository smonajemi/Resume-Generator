import { FunctionComponent } from "react";
import {
  Page,
  Text, Document,
  View
} from "@react-pdf/renderer";
import { UserTypes } from "../../types/user.types";
import { JobExperience } from "../../types/jobExperience.types";
import EducationEntries from "./EducationEntries";
import { EducationTypes } from "../../types/Education.types";
import ExperienceEntries from "./ExperienceEntries";
import PersonalInfoEntries from "./PersonalInfoEntries";
import { styles } from "../hooks/styles";

interface IPdfGeneratorProps {
  experienceData: JobExperience[];
  educationData: EducationTypes[];
  userData: UserTypes
}


const personalData = {
  firstName: "Sina",
  lastName: "Monajemi",
  address:
    "Richmond Hill, ON, L4B0H4 - +1-647-466-5659 - sina.monajemi@me.com",
  summary:
    "Committed professional offering more than 3 years of experience in software development. Excellent communication skills and exceptional problem-solving abilities both in team-oriented and self-motivated settings.",

  jobDetail: ["1", "2", "3"],
}

const jobExperienceData = [
{
  jobTitle: "Software Developer",
  company: "Freelance",
  startDate: "March 2020",
  endDate: "",
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
  program: 'Software Programming',
  schoolName: 'Seneca',
  startDate: 'Jan 2018',
  endDate: 'string',
  city: 'Toronto',
  province: 'ON',
},
{
  program: 'Hospitality Management',
  schoolName: 'Seneca',
  startDate: 'Jan 2013',
  endDate: 'August 2014',
  city: 'Markham',
  province: 'ON',
},
];



const PdfGenerator: FunctionComponent<IPdfGeneratorProps> = ({
  experienceData,
  educationData,
  userData
}) => {

  return (
    <Document>
      <Page style={styles.body} size="A4">
        <>
          <View>
            <PersonalInfoEntries userInfo={userData} />
          </View>
          <View>
            <ExperienceEntries jobExperience={jobExperienceData} />
          </View>
          <View>
            <EducationEntries education={educationEntriesData} />
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
