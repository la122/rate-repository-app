import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    console.error("Quering single repository failed", error);
    return;
  }

  return { repository: data?.repository, loading, refetch };
};

export default useRepository;
