import { StyleSheet, Text, View } from "react-native"


const TapHome = () => {

  return(
    <View style={styles.rootContainer}>
      <Text>
        tap home
      </Text>
    </View>
  )
}

export default TapHome;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})