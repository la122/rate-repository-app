import { format } from "date-fns";
import { FlatList, StyleSheet, View } from "react-native";
import theme from "../../theme";

import Subheading from "../Subheading";
import Text from "../Text";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
  },
  rows: {
    alignItems: "flex-start",
    paddingLeft: 16,
    flex: 1,
  },
  separator: {
    height: 10,
  },
  item: {
    paddingBottom: 8,
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    color: theme.colors.primary,
    fontWeight: "bold",

    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text fontWeight="bold" color="primary">
          {review.rating}
        </Text>
      </View>
      <View style={styles.rows}>
        <Subheading>{review.user.username}</Subheading>
        <Text style={styles.item} color="textSecondary">
          {date}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = ({ repository, showButton, onEndReached }) => {
  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} showButton={showButton} />
          <ItemSeparator />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
