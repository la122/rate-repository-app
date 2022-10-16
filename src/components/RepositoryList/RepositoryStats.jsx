import { StyleSheet, View } from "react-native";

import Subheading from "../Subheading";
import Text from "../Text";

const styles = StyleSheet.create({
  columns: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 16,
  },
  rows: {
    alignItems: "center",
  },
  item: {
    paddingTop: 8,
  },
});

const RepositoryStat = ({ count, label }) => {
  const countRounded = () => {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count;
  };

  return (
    <View style={styles.rows}>
      <Subheading>{countRounded()}</Subheading>
      <Text style={styles.item} color="textSecondary">
        {label}
      </Text>
    </View>
  );
};

const RepositoryStatList = ({ item }) => (
  <View style={styles.rows}>
    <View style={styles.columns}>
      <RepositoryStat count={item.stargazersCount} label="Stars" />
      <RepositoryStat count={item.forksCount} label="Forks" />
      <RepositoryStat count={item.reviewCount} label="Reviews" />
      <RepositoryStat count={item.ratingAverage} label="Rating" />
    </View>
  </View>
);

export default RepositoryStatList;
