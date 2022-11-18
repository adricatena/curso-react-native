import { StyleSheet, Text } from "react-native"

function StyledText({ children }) {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    lineHeight: 15,
  },
})

export default StyledText
