import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import useMe from "../../hooks/useMe";
import useSignIn from "../../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    width: "100%",
  },
});

const AppBar = () => {
  const { me } = useMe();
  const [, signOut] = useSignIn();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {me && <AppBarTab to="/createReview">Create a review</AppBarTab>}
        {me ? (
          <AppBarTab onPress={signOut}>Sign out</AppBarTab>
        ) : (
          <>
            <AppBarTab to="/signIn">Sign in</AppBarTab>
            <AppBarTab to="/signUp">Sign up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
