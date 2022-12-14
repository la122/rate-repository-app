import { Formik } from "formik";
import { Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";

import FormikTextInput from "./../FormikTextInput";
import Subheading from "./../Subheading";
import theme from "../../theme";
import useSignIn from "../../hooks/useSignIn";

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

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      navigate("/");
    } catch (e) {
      console.warn(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
