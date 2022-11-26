import { Formik } from "formik";
import { Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";

import FormikTextInput from "./../FormikTextInput";
import Subheading from "./../Subheading";
import theme from "../../theme";
import useSignIn from "../../hooks/useSignIn";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";

const styles = {
  container: {
    backgroundColor: theme.colors.container,
  },
  singUpButton: {
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
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(1).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password confirmation must match")
    .required("Password confirmation is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" />
          <FormikTextInput
            name="passwordConfirm"
            placeholder="Password confirmation"
          />
          <Pressable style={styles.singUpButton} onPress={handleSubmit}>
            <Subheading color="textContrast">Sign Up</Subheading>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [createUser] = useMutation(CREATE_USER);

  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    const user = { username, password };
    try {
      await createUser({ variables: { user } });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.warn(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
