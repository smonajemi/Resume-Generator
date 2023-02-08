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
  address: '85 Oneida Cres', city: 'Richmond Hill', province: 'ON', postalCode: 'L4B0H4', phoneNumber: '6474665659', email: 'sina.monajemi@me.com',
  summary:
    "I aspire to be a Full-Stack Developer at RBC, utilizing my exceptional interpersonal skills and strong ambition to secure a challenging and rewarding position. My three years of experience in frontend and backend web development and successful assessments on HackerRank and LeeCode showcase my mastery of the field. Furthermore, I possess basic knowledge of AWS development tools.",
  technicalSkill: 'Technical Skills: Well-versed in TypeScript, JavaScript, Java, React, Angular, Express, Node.js, PostgreSQL, MySQL, and MongoDB,. Possessing a strong understanding of both SQL and No-SQL database queries.',
  skillSet: ["Proficient in Object-Oriented programming principles", "Capable of juggling multiple tasks and adapting to change without sacrificing output", "Committed to personal growth through ongoing education in new technologies", "Possesses a robust work ethic and enthusiasm for technology, always seeking opportunities for advancement", "Passionate about guiding and supporting businesses in their processes"],
}

const jobExperienceData = [
{
  jobTitle: "Full-Stack Developer",
  company: "Freelance",
  startDate: "Mar. 2020",
  endDate: "",
  jobDetail: ['Developed dynamic web applications using Node.js and MongoDB for a top bar in Toronto, resulting in a 60% increase in user engagement','Revamped websites for a few restaurants to improve navigation and aesthetic appeal','Provided consultancy to a new business in website creation'],
  city: "Toronto",
  province: "ON",
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
// {
//   jobTitle: "Guest Service Agent/Night Auditor ",
//   company: "Hotel Le Germain",
//   startDate: "Mar. 2017",
//   endDate: "Mar. 2020",
//   jobDetail: ['Collaborated with colleagues to promptly address guest issues and provide knowledgeable and friendly service','Demonstrated strong teamwork by effectively resolving guest challenges and complaints by applying creative and actionable solutions', 'Worked closely with the front desk team to manage guest check-in, check-out procedures, reservations, and payments efficiently'],
//   city: "Toronto",
//   province: "ON",
// },
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

// const educationEntriesData = [
// {
//   program: 'Software Programming',
//   schoolName: 'Seneca',
//   startDate: 'Jan. 2018',
//   endDate: '',
//   city: 'Toronto',
//   province: 'ON',
// },
// {
//   program: 'Hospitality Management',
//   schoolName: 'Seneca',
//   startDate: 'Jan. 2013',
//   endDate: 'Aug. 2014',
//   city: 'Markham',
//   province: 'ON',
// },
// ];



const PdfGenerator: FunctionComponent<IPdfGeneratorProps> = ({
  experienceData,
  educationData,
  userData,
}) => {

  return (
    <Document>
      <Page style={styles.body} size="A4">
        <>
          <View>
            <PersonalInfoEntries userInfo={personalData} />
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
          render={({ pageNumber, totalPages }: any) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PdfGenerator;
