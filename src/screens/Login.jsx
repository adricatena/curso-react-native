import { useEffect } from "react"
import { Button, StyleSheet, View } from "react-native"
import { useForm } from "react-hook-form"
import FormInput from "../components/FormInput"
import StyledText from "../components/StyledText"
import useSignIn from "../hooks/useSignIN"

// const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [signIn, { data, loading, error }] = useSignIn()

  async function onSubmit({ email, password }) {
    try {
      await signIn({ email, password })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <View style={styles.form}>
      {loading && <StyledText>Cargando...</StyledText>}
      {error && (
        <StyledText style={{ color: "red" }}>Surgio un error</StyledText>
      )}
      <FormInput
        name="email"
        placeholder="email"
        // rules={{ pattern: emailRegEx }}
        control={control}
        error={errors.email}
      />
      {errors.email && (
        <StyledText style={styles.error}>Error en el email</StyledText>
      )}
      <FormInput
        name="password"
        placeholder="password"
        control={control}
        // show={false}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  form: { margin: 12 },
  error: {
    color: "red",
    marginBottom: 20,
    marginTop: -5,
  },
})

export default Login
