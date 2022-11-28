import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigate } from "react-router-native";
import useMe from "../hooks/useMe";
import useReview from "../hooks/useReview";
import theme from "../theme";
import { ItemSeparator, ReviewItem } from "./RepositoryList/SingleRepository";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    marginTop: 16,
    marginHorizontal: 8,
    padding: 4,
  },
});

export const MyReviewsContainer = ({
  reviews,
  onEndReached,
  onViewButtonPress,
  onDeleteButtoPress,
}) => {
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  const Actions = ({ review }) => (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="contained"
        color={theme.colors.primary}
        uppercase={false}
        onPress={() => onViewButtonPress(review.repository.id)}
      >
        View repository
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        color={theme.colors.error}
        uppercase={false}
        onPress={() => onDeleteButtoPress(review.id)}
      >
        Delete review
      </Button>
    </View>
  );

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          subheading={item.repository.fullName}
          actions={<Actions review={item} />}
        />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const MyReviews = () => {
  const { me, fetchMore, refetch } = useMe({ first: 10, includeReviews: true });
  const { deleteReview } = useReview();
  const navigate = useNavigate();

  const onViewButtonPress = (repositoryId) => {
    navigate(`/repositories/${repositoryId}`);
  };

  const onDeleteButtoPress = async (reviewId) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            await deleteReview(reviewId);
            refetch();
          },
        },
      ]
    );
  };

  return me ? (
    <MyReviewsContainer
      reviews={me.reviews}
      onEndReached={fetchMore}
      onViewButtonPress={onViewButtonPress}
      onDeleteButtoPress={onDeleteButtoPress}
    />
  ) : null;
};

export default MyReviews;
