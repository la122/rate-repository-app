import { Formik } from "formik";
import { Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Subheading from "./Subheading";
import theme from "../theme";
import useReview from "../hooks/useReview";

const styles = {
  container: {
    backgroundColor: theme.colors.container,
  },
  submitButton: {
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
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.string().required("Rating is required"),
  text: yup.string(),
});

export const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />
          <FormikTextInput name="repositoryName" placeholder="repositoryName" />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput name="text" placeholder="Review" multiline />
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Subheading color="textContrast">Create a review</Subheading>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const CreateReviewPage = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const review = { ...values, rating: +values.rating };
    try {
      const data = await createReview(review);
      navigate(`/repositories/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default CreateReviewPage;
