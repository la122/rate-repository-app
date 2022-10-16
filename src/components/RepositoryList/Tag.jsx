import { StyleSheet, View } from "react-native";

import Text from "../Text";
import theme from "../../theme";

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
