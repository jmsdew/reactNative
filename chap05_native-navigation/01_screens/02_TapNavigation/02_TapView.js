import { Button, Text, View } from "react-native"

const TapView = ({router, navigation}) => {


  const stackPage =() => {
    navigation.navigate("Stackcomponent")
  }

  return(
      <View>
        <Text>
          새로운 화면
        </Text>
        <View>
          <Button title="Stack 이동" onPress={stackPage}/>
        </View>
      </View>
  )
}

export default TapView;