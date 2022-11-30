import Main from "./src/screens/Main"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import theme from "./src/theme"
import Login from "./src/screens/Login"
import Icon from "./src/components/Icon"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "./src/utils/apolloClient"

// const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tabs.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.appBar.primary },
            headerTitleStyle: {
              color: theme.appBar.textPrimary,
            },
            tabBarLabelStyle: {
              fontSize: theme.tabBar.fontSize,
            },
            tabBarActiveTintColor: theme.tabBar.colorPrimary,
            tabBarInactiveTintColor: theme.tabBar.colorSecondary,
          }}
        >
          <Tabs.Screen
            name="Repositories"
            component={Main}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="home" active={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="login" active={focused} />
              ),
            }}
          />
        </Tabs.Navigator>
        {/* <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.appBar.primary },
          headerTitleStyle: {
            color: theme.appBar.textPrimary,
          },
        }}
      >
        <Stack.Screen name="Repositories" component={Main} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator> */}
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
