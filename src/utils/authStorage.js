import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
    this.tokenKey = `${namespace}:token`
  }

  async getAccessToken() {
    // Get the access token for the storage
    try {
      const token = await AsyncStorage.getItem(this.tokenKey)
      return token
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    try {
      await AsyncStorage.setItem(this.tokenKey, accessToken)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    try {
      await AsyncStorage.removeItem(this.tokenKey)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export default AuthStorage
