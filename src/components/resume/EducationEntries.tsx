import { View, Text } from "@react-pdf/renderer";
import moment from "moment";
import { FunctionComponent } from "react";
import { EducationTypes } from "../../types/Education.types";
import { styles } from "../hooks/styles";

interface IEducationEntriesProps {
  education: EducationTypes[]
}

const EducationEntries: FunctionComponent<IEducationEntriesProps> = ({
  education
}) => {

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
              <Text style={styles.date}>{moment(val?.startDate)?.format("MMM YYYY")} - {val?.isChecked ? 'present': moment(val?.endDate)?.format("MMM YYYY")}</Text>
              </View>
            </View>
            <Text style={styles.subHeader}>{val?.schoolName?.toUpperCase()} - {val?.city?.toUpperCase()}, {val?.province?.toUpperCase()}</Text>
          </View>
        </View>
      ))}
    </>
  );
};
export default EducationEntries;

