import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    console.error("Quering repositories failed", error);
    return;
  }

  return { repositories: data?.repositories, loading, refetch };
};

export default useRepositories;
