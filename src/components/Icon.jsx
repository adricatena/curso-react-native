import { MaterialIcons } from "@expo/vector-icons"
import theme from "../theme"

function Icon({ name = "", size = 25, active = true }) {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={active ? theme.colors.primary : theme.colors.textSecondary}
    />
  )
}

export default Icon
