import { Button, Text, View } from "react-native";

const StackComponent = ({route, navigation}) => {

  const page = () => {
      navigation.navigate("StackView");

  }

  const tapRouter = () => {
    navigation.navigate("NestingNavigation");
  }

  return (
    <View>
      <Text>
        Stack View 화면
      </Text>
      <Button onPress={page} title="이동"/>

    </View>
  )


}

export default StackComponent;