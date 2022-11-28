import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from "../theme";
import RepositoryView from "./RepositoryView";
import CreateReviewPage from "./CreateReviewPage";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/createReview" element={<CreateReviewPage />} exact />
        <Route path="/myReviews" element={<MyReviews />} exact />
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="/signUp" element={<SignUp />} exact />
        <Route path="/repositories/:id" element={<RepositoryView />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
