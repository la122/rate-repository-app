import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 4,
  },
});

const Tag = (props) => {
  return (
    <View style={styles.container}>
      <Text color="textContrast" {...props} />
    </View>
  );
};

export default Tag;
