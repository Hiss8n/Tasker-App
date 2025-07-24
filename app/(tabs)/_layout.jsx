import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f1f6f2ff",
        tabBarInactiveTintColor: "#1F0F0F",

        tabBarStyle: {
          backgroundColor: "gray",
          borderTopWidth: 1,
          borderTopColor: "red",
          height: 70,
          paddingBottom: 30,
          paddingTop: 3,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="addTodo"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => (
            <Ionicons size={22} color={color} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "setting",
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} color={color} name="settings" />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
