import { useApolloClient, useMutation } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [authenticate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();

  const signIn = async (credentials) => {
    const { data } = await authenticate({ variables: { credentials } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
  };

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return [signIn, signOut, result];
};

export default useSignIn;
