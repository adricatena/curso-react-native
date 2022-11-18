import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import theme from "../theme"
import AppBarTab from "./AppBarTab"

function AppBar({ title = "Repositories" }) {
  return (
    <View style={styles.container}>
      <AppBarTab title={title} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: theme.colors.primary,
  },
})

export default AppBar
