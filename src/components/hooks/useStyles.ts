import { StyleSheet } from "@react-pdf/renderer";

export const useStyles = () => {

      const styles = StyleSheet.create({
        entryContainer: {
            marginBottom: 10,
          },

        title: {
            fontSize: 11,
            color: "black",
            textDecoration: "none",
            fontWeight: 'bold'
        },
        resumeTitle: {
            fontSize: 24,
            textAlign: "center",
            color: "black",
            textDecoration: "none",
            fontWeight: 700
        },
        text: {
            fontSize: 14,
            fontFamily: "Times-Roman",
            justifyContent: "center",
            display: 'flex',

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
            fontSize: 8
        },
        headerContainer: {
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 2
        },
        summary: {
            padding: 3,
            fontSize: 10,
            marginTop: 3,
            marginBottom: 3,
            textAlign: "center",
            color: "#5A5A5A",
        },
   
        detailContainer: {
            flexDirection: 'row',
        },
        subHeader: {
            fontSize: 8,
            marginBottom: 1.5
          },
    });

    return {
        styles
    } as const
}

