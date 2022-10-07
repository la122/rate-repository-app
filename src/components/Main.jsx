import { StyleSheet, View } from "react-native";
import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    maxWidth: 600,
    alignSelf: "center",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppBar />
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;
