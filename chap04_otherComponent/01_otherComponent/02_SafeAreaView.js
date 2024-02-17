import { SafeAreaView, StyleSheet } from "react-native"


const SafeAreaViewComponent = ({children, isDark}) => {

  // style 배열로 줌  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:isDark? "black" : "white"} ]}>  
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default SafeAreaViewComponent;