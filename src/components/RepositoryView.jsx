import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import SingleRepository from "./RepositoryList/SingleRepository";

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({
    repositoryId: id,
    first: 5,
  });

  if (!repository) return null;
  return (
    <SingleRepository
      repository={repository}
      showButton
      onEndReached={fetchMore}
    />
  );
};

export default RepositoryView;
