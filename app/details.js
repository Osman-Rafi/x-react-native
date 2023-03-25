import { View, Text } from "react-native";
import { useRouter } from "expo-router";

const Details = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => {
          router.back();
        }}
      >
        Details Screen
      </Text>
    </View>
  );
};

export default Details;
