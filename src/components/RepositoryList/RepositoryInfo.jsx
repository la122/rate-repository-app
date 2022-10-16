import { StyleSheet, View } from "react-native";

import Avatar from "./Avatar";
import Tag from "./Tag";
import Subheading from "../Subheading";
import Text from "../Text";

const styles = StyleSheet.create({
  columns: {
    flexDirection: "row",
  },
  rows: {
    alignItems: "flex-start",
    paddingLeft: 16,
    flex: 1,
  },
  item: {
    paddingBottom: 8,
  },
});

const RepositoryInfo = ({ item }) => (
  <View style={styles.columns}>
    <Avatar uri={item.ownerAvatarUrl} />
    <View style={styles.rows}>
      <Subheading style={styles.item}>{item.fullName}</Subheading>
      <Text style={styles.item} color="textSecondary">
        {item.description}
      </Text>
      <Tag>{item.language}</Tag>
    </View>
  </View>
);

export default RepositoryInfo;
