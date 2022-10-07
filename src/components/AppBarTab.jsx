import { StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const AppBarTab = (props) => (
  <Link to={props.to} style={styles.container}>
    <Subheading color="textContrast" {...props} />
  </Link>
);

export default AppBarTab;
