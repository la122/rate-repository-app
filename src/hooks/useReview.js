import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [createReviewMutation, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    console.log("creating", review);
    const { data } = await createReviewMutation({ variables: { review } });
    return data;
  };

  return [createReview, result];
};

export default useReview;
