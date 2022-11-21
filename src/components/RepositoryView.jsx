import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import SingleRepository from "./RepositoryList/SingleRepository";

const RepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return null;
  return <SingleRepository repository={repository} showButton />;
};

export default RepositoryView;
