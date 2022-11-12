import { Pressable, StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";

import RepositoryInfo from "./RepositoryInfo";
import RepositoryStats from "./RepositoryStats";
import theme from "../../theme";
import Subheading from "../Subheading";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    height: 50,
    margin: 8,
    borderRadius: 3,
    padding: 8,
  },
});

const RepositoryItem = ({ item, showButton }) => {
  const openUrl = () => {
    console.log("going to ", item.url);
    Linking.openURL(item.url);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryInfo item={item} />
      <RepositoryStats item={item} />
      {showButton && (
        <Pressable style={styles.button} onPress={openUrl}>
          <Subheading color="textContrast">Open in Github</Subheading>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
