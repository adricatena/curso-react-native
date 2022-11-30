import { useMutation } from "@apollo/client"
import { LOGIN } from "../graphql/mutations"

function useSignIn() {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  async function signIn({ email, password }) {
    login({ variables: { email, password } })
  }

  return [signIn, { data, loading, error }]
}

export default useSignIn
