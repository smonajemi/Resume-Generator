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
import CoverLetterEntries from "./CoverLetterEntries";

interface IPdfGeneratorProps {
  experienceData: JobExperience[];
  educationData: EducationTypes[];
  userData: UserTypes
  coverLetter: string
}

const PdfGenerator: FunctionComponent<IPdfGeneratorProps> = ({
  userData,
  experienceData,
  educationData,
  coverLetter
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
    
          <View>
          <CoverLetterEntries coverLetter={coverLetter}/>
          </View>
     
         
        </>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }: any) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PdfGenerator;
