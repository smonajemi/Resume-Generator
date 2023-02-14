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
    "My objective is to obtain a stimulating and fulfilling position at Cisco, where I can utilize my remarkable interpersonal abilities and unwavering drive. Given my three-year background in frontend and backend web development, I possess the necessary skills to work alongside a talented group of software engineers to create and upkeep products. My competence in this area has been validated by my accomplishment of assessments on HackerRank and LeeCode. While I possess a foundational understanding of AWS development tools, I am enthusiastic about expanding my expertise and exploring cloud development further.",
  technicalSkill: "Technical SKills: Well-versed in TypeScript, JavaScript, React, Express, Node.js, PostgreSQL, MySQL, and MongoDB. Additionally, I have a solid grasp of Java and C++ and employ best practices for both. Furthermore, I possess a thorough comprehension of SQL and NoSQL database queries.",
  skillSet: ["Proficient in Object-Oriented programming principles", "Capable of juggling multiple tasks and adapting to change without sacrificing output", "Committed to personal growth through ongoing education in new technologies", "Possesses a robust work ethic and enthusiasm for technology, always seeking opportunities for advancement", "Passionate about guiding and supporting businesses in their processes"],
}

const jobExperienceData = [
{
  jobTitle: "Full-Stack Developer",
  company: "Freelance",
  startDate: "Aug 2020",
  endDate: "",
  jobDetail: ['Responsible for overseeing IT operations and installation in 2 restaurants','Developed dynamic web applications using Node.js and MongoDB for a top bar in Toronto, resulting in a 40% increase in user engagement','Revamped websites for a few restaurants to improve navigation and aesthetic appeal'],
  city: "Toronto",
  province: "ON",
  isChecked: true
},
{
  jobTitle: "Junior Software Developer",
  company: "BPTN",
  startDate: "Jul 2021",
  endDate: "Jun 2022",
  jobDetail: ['As a member of an Agile development team, collaborated with team members to achieve project goals, create solutions, and meet project deadlines while contributing','Helped build the Obsidi social networking platform with the use of technologies like React and Material-UI','Balanced multiple projects and assignments to maintain high standards and meet deadlines', 'Handled both back-end and front-end aspects of the development process', 'Improved existing software systems to boost performance and introduce new capabilities'],
  city: "Toronto",
  province: "ON",
  isChecked: false
},
{
  jobTitle: "Junior Software Developer - Hackathon",
  company: "Seneca",
  startDate: "Jun 2020",
  endDate: "Jul 2020",
  jobDetail: ['Authored clear and well-structured code for project implementation','Contributed to the back-end development utilizing Java and MySQL','Worked with development teams to ensure seamless integration during build processes','Secured third place in the competition'],
  city: "Toronto",
  province: "ON",
  isChecked: false
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
  startDate: "Sep 2014",
  endDate: "May 2016",
  jobDetail: ['Demonstrated strong teamwork by effectively resolving guest challenges and complaints by applying creative and actionable solutions','Utilized interpersonal communication skills to increase room revenue by 10% through up-selling efforts','Effectively handled customer complaints and resolved issues to their complete satisfaction with patience and care'],
  city: "Jasper",
  province: "ON",
  isChecked: false
}
];

const educationEntriesData = [
{
  program: 'Software Programming',
  schoolName: 'Seneca',
  startDate: 'Jan 2018',
  endDate: '',
  city: 'Toronto',
  province: 'ON',
  isChecked: true
},
{
  program: 'Hospitality Management',
  schoolName: 'Seneca',
  startDate: 'Jan 2013',
  endDate: 'Aug 2014',
  city: 'Markham',
  province: 'ON',
},
];



const PdfGenerator: FunctionComponent<IPdfGeneratorProps> = ({
  userData,
  experienceData,
  educationData
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
