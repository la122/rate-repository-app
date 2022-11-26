import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const FlatListItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  );
};

export const RepositoryListContainer = ({ repositories, listHeader }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={listHeader}
      renderItem={({ item }) => <FlatListItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const SORT_OPTIONS = [
  {
    label: "Latest repositories",
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  {
    label: "Highest rated repositories",
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  {
    label: "Lowest rated repositories",
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
];

const SortingPicker = ({ sortOption, setSortOption }) => {
  return (
    <Picker selectedValue={sortOption} onValueChange={setSortOption}>
      {SORT_OPTIONS.map((option, index) => (
        <Picker.Item label={option.label} value={index} key={index} />
      ))}
    </Picker>
  );
};

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState(0);
  const { repositories } = useRepositories(SORT_OPTIONS[sortOption]);

  const listHeader = () => (
    <SortingPicker sortOption={sortOption} setSortOption={setSortOption} />
  );

  return (
    <RepositoryListContainer
      repositories={repositories}
      listHeader={listHeader}
    />
  );
};

export default RepositoryList;
