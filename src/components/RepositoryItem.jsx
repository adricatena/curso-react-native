import { StyleSheet, View } from "react-native"
import RepositoryStats from "./RepositoryStats"
import RepositoryItemHeader from "./RepositoryItemHeader"

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

  return (
    <View style={styles.container}>
      <RepositoryItemHeader
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <RepositoryStats
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 5 },
})

export default RepositoryItem
