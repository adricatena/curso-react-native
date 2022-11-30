import { Text, StyleSheet, View } from "react-native"
import RepositoryList from "../components/RepositoryList"

function Main() {
  return (
    // <View style={styles.container}>
      <RepositoryList />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
})

export default Main
