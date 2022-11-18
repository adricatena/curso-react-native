import { Image, StyleSheet, Text, View } from "react-native"
import StyledText from "./StyledText"

function RepositoryItem({ item = {} }) {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item
  // console.log(ownerAvatarUrl)
  return (
    <View style={styles.container}>
      <View style={styles.personalDataContainer}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        <View>
          <StyledText>{fullName}</StyledText>
          <Text>{description}</Text>
          <Text>{language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View>
          <Text>Stars: {stargazersCount}</Text>
        </View>
        <View>
          <Text>Forks: {forksCount}</Text>
        </View>
        <View>
          <Text>Reviews: {reviewCount}</Text>
        </View>
        <View>
          <Text>Rating: {ratingAverage}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  personalDataContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
  statsContainer: {},
})

export default RepositoryItem
