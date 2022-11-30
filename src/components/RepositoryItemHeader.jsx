import { Image, StyleSheet, View } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"

function RepositoryItemHeader({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      <View style={styles.dataContainer}>
        <StyledText fontWeight="bold">{fullName}</StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  dataContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    /* backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "orange",
      default: "purple",
    }), */
    // backgroundColor: Platform.OS === "android" ? "red" : "#09f",
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    marginVertical: 4,
    overflow: "hidden", // para que muestre bien el borderRadius
  },
})

export default RepositoryItemHeader
