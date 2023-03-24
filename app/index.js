import { View } from "react-native";
import { Link, Stack } from "expo-router";

const Home = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Stack.Screen options={{ title: "Overview" }} />
    <Link href="/details">Go to details</Link>
  </View>
);

export default Home;
