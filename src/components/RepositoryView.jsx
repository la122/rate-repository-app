import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";

const RepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return null;
  return <RepositoryItem item={repository} showButton />;
};

export default RepositoryView;
