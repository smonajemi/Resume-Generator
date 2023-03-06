import { View, Text } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { UserTypes } from "../../types/user.types";
import { styles } from "../hooks/styles";
import List, { Item } from "../List";

interface ICoverLetterEntriesProps {
    coverLetter: string
}

const CoverLetterEntries: FunctionComponent<ICoverLetterEntriesProps> = ({
    coverLetter
}) => {

    return (
        <>
            <View>
                <View style={styles.leftColumn}>
                    <Text style={styles.text}>{coverLetter}</Text> 
                </View>
            </View>
        </>
    )
};

export default CoverLetterEntries;


