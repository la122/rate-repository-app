import { FlatList } from "react-native";
import useMe from "../hooks/useMe";
import { ItemSeparator, ReviewItem } from "./RepositoryList/SingleRepository";

export const MyReviewsContainer = ({ reviews, onEndReached }) => {
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItem review={item} subheading={item.repository.fullName} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const MyReviews = () => {
  const { me, fetchMore } = useMe({ first: 10, includeReviews: true });
  return me ? (
    <MyReviewsContainer reviews={me.reviews} onEndReached={fetchMore} />
  ) : null;
};

export default MyReviews;
