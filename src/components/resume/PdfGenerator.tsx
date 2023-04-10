import { FunctionComponent } from "react";
import {
  Page,
  Text, Document,
  View,
  Link
} from "@react-pdf/renderer";
import { UserTypes } from "../../types/user.types";
import { JobExperience } from "../../types/jobExperience.types";
import EducationEntries from "./EducationEntries";
import { EducationTypes } from "../../types/education.types";
import ExperienceEntries from "./ExperienceEntries";
import PersonalInfoEntries from "./PersonalInfoEntries";
import { styles } from "../hooks/styles";
import CoverLetterEntries from "./CoverLetterEntries";

interface IPdfGeneratorProps {
  experienceData: JobExperience[];
  educationData: EducationTypes[];
  userData: UserTypes
  coverLetter: string
  capitalize: Function
}


const PdfGenerator: FunctionComponent<IPdfGeneratorProps> = ({
  userData,
  experienceData,
  educationData,
  coverLetter,
  capitalize
}) => {
  const setHyperlink = (url: string, text: string ) => {
    return <Text style={styles.footer}>This resume was generated using <Link src={url}>{text}</Link></Text>;
  };
  
  return (
    <Document>
      <Page style={styles.body} size="A4">
        <>
          <View>
            <PersonalInfoEntries userInfo={userData} capitalize={capitalize} />
          </View>
          <View>
            <ExperienceEntries jobExperience={experienceData} capitalize={capitalize}/>
          </View>
          <View>
            <EducationEntries education={educationData} capitalize={capitalize}/>
          </View>
    
          <View>
          <CoverLetterEntries coverLetter={coverLetter} />
          </View>
        </>
        {setHyperlink('https://smonajemi.netlify.app', 'smonajemi - ResumeGenie')}
      </Page>
    </Document>
  );
};

export default PdfGenerator;
