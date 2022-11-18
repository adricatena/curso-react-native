import { Pressable, StyleSheet, Text } from "react-native"

function AppBarTab({ title = "" }) {
  return (
    <Pressable>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
})

export default AppBarTab
