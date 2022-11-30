import { StyleSheet, TextInput } from "react-native"

function StyledInput({
  style = {},
  placeholder = "",
  onChange,
  show = true,
  error = false,
}) {
  const inputStyle = [styles.input, style, error && styles.error]
  return (
    <TextInput
      placeholder={placeholder}
      style={inputStyle}
      onChangeText={onChange}
      secureTextEntry={!show}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  error: {
    borderColor: "red",
  },
})

export default StyledInput
