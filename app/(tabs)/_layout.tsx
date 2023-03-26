import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="cats"
        options={{
          title: "Cats",
          tabBarIcon: () => <Text>🐱</Text>,
        }}
      />
      <Tabs.Screen
        name="dogs"
        options={{
          title: "Dogs",
          tabBarIcon: () => <Text>🐶</Text>,
        }}
      />
    </Tabs>
  );
}
