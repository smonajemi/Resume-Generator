import { View, Text } from "@react-pdf/renderer";
import moment from "moment";
import { FunctionComponent } from "react";
import { JobExperience } from "../../types/jobExperience.types";
import { styles } from "../hooks/styles";
import List, { Item } from "../List";

interface IExperienceEntriesProps {
  jobExperience: JobExperience[]
  capitalize: Function
}

const ExperienceEntries: FunctionComponent<IExperienceEntriesProps> = ({
  jobExperience,
  capitalize
}) => {

  return (
    <>
      <Text style={styles.text}>Experience</Text>
      <Text style={styles.divider}></Text>
      {jobExperience?.map((val, i) => (
        <View style={styles.entryContainer} key={i}>
          <View style={styles.leftColumn}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{capitalize(val?.jobTitle)}</Text>
              <View style={styles.rightColumn}>
                <Text style={styles.date}>
                  {moment(val?.startDate)?.format('MMM YYYY')} - {val?.isChecked ? 'present' : moment(val?.endDate)?.format('MMM YYYY')}
                </Text>
              </View>
            </View>
            <Text style={styles.subHeader}>
              {capitalize(val?.company)} - {capitalize(val?.city)}, {val?.province?.toUpperCase()}
            </Text>
          </View>
          <List>
            {val?.jobDetail?.map((detail, i) => (
              <Item key={i} style={styles.detailContainer}>
                {capitalize(detail)}
              </Item>
            ))}
          </List>
        </View>
      ))}
    </>
  );

};



export default ExperienceEntries;
