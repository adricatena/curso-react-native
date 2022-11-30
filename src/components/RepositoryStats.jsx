import { StyleSheet, View } from "react-native"
import StyledText from "./StyledText"

function parseThousands(value) {
  const parsedValue =
    value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
  return parsedValue
}

function RepositoryStats({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) {
  return (
    <View style={styles.container}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stargazersCount)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {reviewCount}
        </StyledText>
        <StyledText align="center">Reviews</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {ratingAverage}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

export default RepositoryStats
