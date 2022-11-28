import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";
import { IconButton, Menu, Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";
import Text from "../Text";

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

export const RepositoryListContainer = ({
  repositories,
  listHeader,
  onEndReached,
}) => {
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
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
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
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
      }}
    >
      <Pressable onPress={openMenu}>
        <Text fontSize="subheading">{SORT_OPTIONS[sortOption].label}</Text>
      </Pressable>

      <Menu
        anchor={<IconButton icon="menu-down" onPress={openMenu} />}
        visible={visible}
        onDismiss={closeMenu}
      >
        {SORT_OPTIONS.map((option, index) => (
          <Menu.Item
            key={index}
            title={option.label}
            onPress={() => setSortOption(index)}
          />
        ))}
      </Menu>
    </View>
  );
};

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery);
  const { repositories, fetchMore } = useRepositories({
    first: 6,
    ...SORT_OPTIONS[sortOption],
    searchKeyword,
  });

  const onChangeSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      listHeader={
        <>
          <Searchbar
            placeholder="search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <SortingPicker
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </>
      }
      onEndReached={fetchMore}
    />
  );
};

export default RepositoryList;
