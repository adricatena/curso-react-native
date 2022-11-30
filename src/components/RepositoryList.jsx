import { FlatList, View, StyleSheet } from "react-native"
import useRepositories from "../hooks/useRepositories"
import RepositoryItem from "./RepositoryItem"

function ItemSeparator() {
  return <View style={styles.separator} />
}

function RepositoryList() {
  const { repositories } = useRepositories()

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

export default RepositoryList
