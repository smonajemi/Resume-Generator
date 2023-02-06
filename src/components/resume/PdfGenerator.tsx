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
