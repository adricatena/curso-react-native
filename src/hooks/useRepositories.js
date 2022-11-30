// import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

function useRepositories() {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
  const { repositories = null } = data

  /* const [repos, setRepos] = useState(null)

  async function fetchRepos() {
    // const response = await fetch("http://10.0.2.2:5000/api/repositories") // prestar atencion que "localhost" aca no funciona por donde esta apuntando el emulador de android
    // const result = await response.json()
    // setRepos(result)
    try {
      // const response = await fetch("http://10.0.2.2:5000/api/repositories") // prestar atencion que "localhost" aca no funciona por donde esta apuntando el emulador de android
      const response = await fetch(`http://192.168.0.132:5000/api/repositories`)
      const result = await response.json()
      setRepos(result)
    } catch (error) {
      setRepos(null)
    }
  }
  useEffect(() => {
    fetchRepos()
  }, []) */

  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return { loading, repositories: repositoriesNodes, refetch }
}

export default useRepositories
