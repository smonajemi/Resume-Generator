import {
    Box,
    CardContent,
    Typography,
    CardActions,
    Button,
    Card,
    CardActionArea,
} from "@mui/material";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { UserTypes } from "../../types/user.types";

interface IPersonalInfoEntriesProps {
    userInfo: UserTypes
}

const PersonalInfoEntries: FunctionComponent<IPersonalInfoEntriesProps> = ({
    userInfo,
}) => {
    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 24,
            textAlign: "center",
        },
        text: {
            fontSize: 14,
            fontFamily: "Times-Roman",
            justifyContent: "center",
            display: 'flex',

        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        header: {
            fontSize: 10,
            marginTop: 3,
            textAlign: "center",
            color: "grey",
        },
        divider: {
            borderTop: '3px solid #bbb',
            marginTop: 3,
            marginBottom: 5,
        },
        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
        },
        leftColumn: {
            flexDirection: 'column',
            flexGrow: 9,
        },
        rightColumn: {
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'flex-end',
            justifySelf: 'flex-end',
        },
        date: {
            fontSize: 11
        },
        headerContainer: {
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 2
        },
        center: {
            fontSize: 10,
            marginBottom: 5,
            textAlign: "center",
            color: "grey",
            padding: 3
        },
        summary: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        item: {
            flexDirection: 'row',
            marginBottom: 5,
        },
        detailContainer: {
            flexDirection: 'row',
        },
        points: {
            padding: '5em'
        },
        container: {
            flex: 1,
            paddingTop: 30,
            paddingLeft: 15,
            '@media max-width: 400': {
                paddingTop: 10,
                paddingLeft: 0,
            },
        },
    });
    console.log("userData", userInfo)
    return (
        <>
      
                <View key={userInfo?.key}>
                    <Text style={styles.title}>{userInfo?.firstName + ' ' + userInfo?.lastName}</Text>
                    <Text style={styles.header}>{userInfo?.address + ', ' + userInfo?.city + ', ' + userInfo?.province + ', ' + userInfo?.postalCode + ' | ' + userInfo?.phoneNumber + ' | ' + userInfo?.email}</Text>
                    <View style={styles.leftColumn}>
                        <Text style={styles.text}>Summary</Text>
                        <Text style={styles.divider}></Text>
                        <View style={styles.center}>
                            <Text style={styles.text}>{userInfo?.summary}</Text>
                        </View>
                    </View>
                </View>

       
        </>
    )
};

export default PersonalInfoEntries;


