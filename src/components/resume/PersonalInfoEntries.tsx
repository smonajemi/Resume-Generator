import { View, Text } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { UserTypes } from "../../types/user.types";
import { styles } from "../hooks/styles";
import List, { Item } from "../List";

interface IPersonalInfoEntriesProps {
    userInfo: UserTypes | null
}

const PersonalInfoEntries: FunctionComponent<IPersonalInfoEntriesProps> = ({
    userInfo,
}) => {
    const capitalize = (string: any) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      };
    
      return (
        <View key={userInfo?.key}>
          <Text style={styles.resumeTitle}>
            {capitalize(userInfo?.firstName)} {capitalize(userInfo?.lastName)}
          </Text>
          <Text style={styles.header}>
            {capitalize(userInfo?.address)}, {capitalize(userInfo?.city)}, {capitalize(userInfo?.province)}, {userInfo?.postalCode?.toUpperCase()} | {userInfo?.phoneNumber} | {userInfo?.email?.toLowerCase()}
          </Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Summary</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.summary}>{userInfo?.summary?.toUpperCase()}</Text>
            <Text style={styles.technicalSkills}>{capitalize(userInfo?.technicalSkill)}</Text>
          </View>
          {userInfo?.skillSet && (
            <List>
              {userInfo?.skillSet?.map((detail, i) => (
                <Item key={i} style={styles.detailContainer}>
                  {capitalize(detail)}
                </Item>
              ))}
            </List>
          )}
        </View>
      );
    };

export default PersonalInfoEntries;


