import { View, Text } from "@react-pdf/renderer";
import moment from "moment";
import { FunctionComponent } from "react";
import { EducationTypes } from "../../types/education.types";
import { styles } from "../hooks/styles";

interface IEducationEntriesProps {
  education: EducationTypes[]
}

const EducationEntries: FunctionComponent<IEducationEntriesProps> = ({
  education
}) => {
  const capitalize = (string: string | any): string => {
    let words: string[] = string.split(" ");
    for (let i: number = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
  };
  return (
    <>
      <Text style={styles.text}>Education and Training</Text>
      <Text style={styles.divider}></Text>
      {education?.map((val, i) => (
        <View style={styles.entryContainer} key={i}>
          <View style={styles.leftColumn}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{val?.program?.toUpperCase()}</Text>
              <View style={styles.rightColumn}>
              <Text style={styles.date}>
                {moment(val?.startDate)?.format('MMM YYYY')} - {val?.isChecked ? 'present' : moment(val?.endDate)?.format('MMM YYYY')}
              </Text>
              </View>
            </View>
            <Text style={styles.subHeader}>
              {capitalize(val?.schoolName)} - {capitalize(val?.city)}, {val?.province?.toUpperCase()}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
 
};
export default EducationEntries;

