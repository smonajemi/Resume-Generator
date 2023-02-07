import { View, Text } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { EducationTypes } from "../../types/Education.types";
import { styles } from "../hooks/styles";

interface IEducationEntriesProps {
  education: EducationTypes[];
}

const EducationEntries: FunctionComponent<IEducationEntriesProps> = ({
  education,
}) => {

  return (
    <>
      <Text style={styles.text}>Education and Training</Text>
      <Text style={styles.divider}></Text>
      {education?.map((val, i) => (
        <View style={styles.entryContainer} key={i}>
          <View style={styles.leftColumn}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{val?.program}</Text>
              <View style={styles.rightColumn}>
                <Text style={styles.date}>{val?.startDate} - {!val?.endDate ? 'present' : val?.endDate}</Text>
              </View>
            </View>
            <Text style={styles.subHeader}>{val?.schoolName} - {val?.city}, {val?.province}</Text>
          </View>
        </View>
      ))}
    </>
  );
};
export default EducationEntries;
