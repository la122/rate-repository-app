import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 8,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.colors.background,
    padding: 8,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const inputStyles = [styles.input, showError && styles.errorBorder];

  return (
    <>
      <TextInput
        style={inputStyles}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
