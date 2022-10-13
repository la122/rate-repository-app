import { Formik } from "formik";
import { Pressable, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Subheading from "./Subheading";

const styles = {
  container: {
    backgroundColor: theme.colors.container,
  },
  singInButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    height: 50,
    margin: 8,
    borderRadius: 3,
    padding: 8,
  },
};

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Pressable style={styles.singInButton} onPress={handleSubmit}>
            <Subheading color="textContrast">Sign in</Subheading>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
