import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  rowItem: {
    flexDirection: "row",
    marginBottom: 3,
    marginLeft: 35,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 7,
  },
  entryContainer: {
    marginBottom: 6,
  },

  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
  },
  resumeTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "black",
    textDecoration: "none",
    fontWeight: 700,
  },
  text: {
    fontSize: 14,
    fontFamily: "Times-Roman",
    justifyContent: "center",
    display: "flex",
    marginTop: 2
  },
  header: {
    fontSize: 10,
    textAlign: "center",
    color: "grey",
  },
  divider: {
    borderTop: "3px solid #bbb",
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
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  date: {
    fontSize: 7,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 3,
    marginBottom: 2,
  },
  summary: {
    padding: 3,
    fontSize: 10,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center",
    color: "#5A5A5A",
  },
  technicalSkills: {
    padding: 4,
    fontSize: 8,
    marginTop: 3,
    marginBottom: 4,
    textAlign: "center",
  },
  detailContainer: {
    flexDirection: "row",
  },
  subHeader: {
    fontSize: 8,
    marginBottom: 1.5,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },

  item: {
    flexDirection: "row",
    marginBottom: 5,
  },

  points: {
    padding: "5em",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
});
