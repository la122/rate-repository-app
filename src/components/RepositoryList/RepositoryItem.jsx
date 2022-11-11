import { StyleSheet, View } from "react-native";

import RepositoryInfo from "./RepositoryInfo";
import RepositoryStats from "./RepositoryStats";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
});

const FlatListItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.container}>
    <RepositoryInfo item={item} />
    <RepositoryStats item={item} />
  </View>
);

export default FlatListItem;
