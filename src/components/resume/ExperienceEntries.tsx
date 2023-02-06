import { View, Text } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { JobExperience } from "../../types/jobExperience.types";
import { styles } from "../hooks/styles";
import List, { Item } from "../List";

interface IExperienceEntriesProps {
  jobExperience: JobExperience[];
}

const ExperienceEntries: FunctionComponent<IExperienceEntriesProps> = ({
  jobExperience,
}) => {

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
                <Text style={styles.date}>{val?.startDate} - {!val?.endDate ? 'present' : val?.endDate}</Text>
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
    </>
  );

};



export default ExperienceEntries;
