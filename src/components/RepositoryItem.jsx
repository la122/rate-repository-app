import { View } from "react-native";
import Text from "./Text";

const FlatListItem = ({ item }) => (
  <View>
    <Text>Full name: {item.fullName}</Text>
    <Text>Description: {item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Forks: {item.language}</Text>
    <Text>Stars: {item.stargazersCount}</Text>
    <Text>Ratings: {item.ratingAverage}</Text>
    <Text>Reviews: {item.reviewCount}</Text>
  </View>
);

export default FlatListItem;
