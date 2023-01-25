import { View, Text } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { UserTypes } from "../../types/user.types";
import { useStyles } from "../hooks/useStyles";

interface IPersonalInfoEntriesProps {
    userInfo: UserTypes | null
}

const PersonalInfoEntries: FunctionComponent<IPersonalInfoEntriesProps> = ({
    userInfo,
}) => {
 
 const {
    styles
 } = useStyles()
    return (
        <>
      
                <View key={userInfo?.key}>
                    <Text style={styles.resumeTitle}>{userInfo?.firstName + ' ' + userInfo?.lastName}</Text>
                    <Text style={styles.header}>{userInfo?.address + ', ' + userInfo?.city + ', ' + userInfo?.province + ', ' + userInfo?.postalCode + ' | ' + userInfo?.phoneNumber + ' | ' + userInfo?.email}</Text>
                    <View style={styles.leftColumn}>
                        <Text style={styles.text}>Summary</Text>
                        <Text style={styles.divider}></Text>
                        <Text style={styles.summary}>{userInfo?.summary}</Text>
                    </View>
                </View>

       
        </>
    )
};

export default PersonalInfoEntries;


