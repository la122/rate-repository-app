import { useMutation } from "@apollo/client";

import { CREATE_REVIEW, DELETE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [createReviewMutation, result] = useMutation(CREATE_REVIEW);
  const [deleteReviewMutation] = useMutation(DELETE_REVIEW);

  const createReview = async (review) => {
    const { data } = await createReviewMutation({ variables: { review } });
    return data;
  };

  const deleteReview = async (deleteReviewId) => {
    const { data } = await deleteReviewMutation({
      variables: { deleteReviewId },
    });
    return data;
  };

  return { createReview, deleteReview, result };
};

export default useReview;
