import { FunctionComponent } from "react";
import {
  Page,
  Text, Document,
  View
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
}
const personalData = {
  firstName: "Sina",
  lastName: "Monajemi",
  address: 'Oneida Cres', city: 'Richmond Hill', province: 'ON', postalCode: 'L4B0H4', phoneNumber: '6474665659', email: 'sinamonajemi@icloud.com',
  summary: "Experienced Full Stack Developer proficient in both frontend and backend web development, with a strong understanding of Agile methodologies. Demonstrated success on HackerRank and LeetCode. Seeking a dynamic role at Thunkable to apply exceptional interpersonal skills and passion for software development to tackle challenging and rewarding projects.",
  technicalSkill: 'Technical Skills: TypeScript, JavaScript, ReactJS, Material-UI, Ionic Framework, ExpressJS, NodeJS, PostgreSQL, and MongoDB.',
  skillSet: ["Proficient in Object-Oriented programming principles", "Capable of juggling multiple tasks and adapting to change without sacrificing output", "Committed to personal growth through ongoing education in new technologies", "Possesses a robust work ethic and enthusiasm for technology, always seeking opportunities for advancement", "Passionate about guiding and supporting businesses in their processes"],
}
const jobExperienceData = [
{
  jobTitle: "Full Stack Developer",
  company: "Freelance",
  startDate: "Mar. 2020",
  endDate: "",
  jobDetail: ['Developed dynamic web applications using Node.js and MongoDB for a top bar in Toronto, resulting in a 60% increase in user engagement','Revamped websites for a few restaurants to improve navigation and aesthetic appeal','Provided consultancy to a new business in website creation'],
  city: "Toronto",
  province: "ON",
  isChecked: true
},
{
  jobTitle: "Junior Software Developer",
  company: "BPTN",
  startDate: "Jul. 2021",
  endDate: "Jun. 2022",
  jobDetail: ['Collaborated with team members to achieve project goals, create solutions, and meet project deadlines','Helped build the Obsidi social networking platform with the use of technologies like React and Material-UI','Balanced multiple projects and assignments to maintain high standards and meet deadlines', 'Handled both back-end and front-end aspects of the development process', 'Improved existing software systems to boost performance and introduce new capabilities'],
  city: "Toronto",
  province: "ON",
},
{
  jobTitle: "Junior Software Developer - Hackathon",
  company: "Seneca",
  startDate: "Jun. 2020",
  endDate: "Jul. 2020",
  jobDetail: ['Authored clear and well-structured code for project implementation','Contributed to the back-end development utilizing Java and MySQL','Worked with development teams to ensure seamless integration during build processes','Secured third place in the competition'],
  city: "Toronto",
  province: "ON",
},

{
  jobTitle: "Front Desk Agent/Night Auditor/Regional Sales Coordinator ",
  company: "Fairmont Hotels & Resorts",
  startDate: "Sept. 2014",
  endDate: "May 2016",
  jobDetail: ['Demonstrated strong teamwork by effectively resolving guest challenges and complaints by applying creative and actionable solutions','Utilized interpersonal communication skills to increase room revenue by 10% through up-selling efforts','Effectively handled customer complaints and resolved issues to their complete satisfaction with patience and care'],
  city: "Jasper",
  province: "ON",
}
];
const educationEntriesData = [
{
  program: 'Software Programming',
  schoolName: 'Seneca',
  startDate: 'Jan. 2018',
  endDate: '',
  city: 'Toronto',
  province: 'ON',
  isChecked: true
},
{
  program: 'Hospitality Management',
  schoolName: 'Seneca',
  startDate: 'Jan. 2013',
  endDate: 'Aug. 2014',
  city: 'Markham',
  province: 'ON',
},
];

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
            <PersonalInfoEntries userInfo={personalData} />
          </View>
          <View>
            <ExperienceEntries jobExperience={jobExperienceData} />
          </View>
          <View>
            <EducationEntries education={educationEntriesData} />
          </View>
    
          {/* <View>
          <CoverLetterEntries coverLetter={coverLetter}/>
          </View> */}
     
         
        </>
        {/* <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }: any) =>
            `${pageNumber} / ${totalPages}`
          }
        /> */}
      </Page>
    </Document>
  );
};

export default PdfGenerator;
