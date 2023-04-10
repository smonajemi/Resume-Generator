import { View, Text, Link} from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { UserTypes } from "../../types/user.types";
import { styles } from "../hooks/styles";
import List, { Item } from "../List";

interface IPersonalInfoEntriesProps {
    userInfo: UserTypes | null
    capitalize: Function
}

const PersonalInfoEntries: FunctionComponent<IPersonalInfoEntriesProps> = ({
    userInfo,
    capitalize
}) => {

  const setHyperlink = (url: string, text: string ) => {
    return <Link style={styles.header} src={"https://www.linkedin.com/in/" + url} >{text}</Link>
  };
  
    
      return (
        <View key={userInfo?.key}>
          <Text style={styles.resumeTitle}>
            {capitalize(userInfo?.firstName)} {capitalize(userInfo?.lastName)}
          </Text>
          <Text style={styles.header}>
            {capitalize(userInfo?.address)}, {capitalize(userInfo?.city)}, {userInfo?.province?.toUpperCase()}, {userInfo?.postalCode?.toUpperCase()} | {userInfo?.phoneNumber} | {userInfo?.email?.toLowerCase()} | {setHyperlink(userInfo?.LinkedIn as string, "LinkedIn")}
          </Text>
          <View style={styles.leftColumn}>
            <Text style={styles.text}>Summary</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.summary}>{capitalize(userInfo?.summary)}</Text>
            <Text style={styles.technicalSkills}>{userInfo?.technicalSkill?.toUpperCase()}</Text>
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


