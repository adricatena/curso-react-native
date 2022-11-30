import { Controller } from "react-hook-form"
import StyledInput from "./StyledInput"

function FormInput({
  name = "",
  placeholder = "",
  show = true,
  rules = {},
  control,
  error = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <StyledInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          show={show}
          error={error}
        />
      )}
    />
  )
}

export default FormInput
