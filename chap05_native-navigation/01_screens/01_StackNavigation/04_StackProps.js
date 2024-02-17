import { Button, StyleSheet, Text, View } from "react-native";


const StackProps = ({test, navigation}) => {

  const indexPage = () => {
    navigation.popToTop(); 
  }

  const goBack = () => {
    navigation.goBack();
  }

  const routerParams =() => {
    navigation.navigate("StackParams", {
        userId:"user",
        userPass:"1234"
    });
  }
  
  return (
    <View>
        <View style={styles.rootContainer}>
          <Text>
            {test}은 다음과 같은 방식으로 전달하여 사용할 수 있다.
          </Text>
          <Button onPress={routerParams} title="params"/>
        </View>
        <View style={styles.buttonContainer}>
          <Text>Navigation테스트</Text>
          <Button onPress={indexPage} title="index"/>
          <Button onPress={goBack} title="Back"/>
        </View>
    </View>
  )
}

export default StackProps;


const styles = StyleSheet.create({
  rootContainer : {
      borderColor:'black',
      borderStyle:"solid",
      borderWidth:3,
      marginBottom:30
  },
  buttonContainer :{
      flexDirection:"column",
      borderColor:"black",
      borderStyle:"dotted",
      borderWidth:3
  },
})