import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

const useMe = () => {
  const { data, error, loading, refetch } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    console.error("Quering active user failed", error);
    return;
  }

  return { me: data?.me, loading, refetch };
};

export default useMe;
