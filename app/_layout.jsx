import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import SafeAreaContentext from './components/SafeAreaContentext.jsx';
const convex = new ConvexReactClient('https://impressive-aardvark-828.convex.cloud', {
  unsavedChangesWarning: false,
});
export default function RootLayout() {
  return <SafeAreaContentext> 
 
    <ConvexProvider client={convex}>   
  <Stack screenOptions={{headerShown:false}} >
    <Stack.Screen name="(tabs)" />
    

  </Stack>
  </ConvexProvider>
  <StatusBar/>
</SafeAreaContentext>
}
