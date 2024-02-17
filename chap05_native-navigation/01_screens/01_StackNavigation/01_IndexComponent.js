import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackComponent from "./02_StackComponent";
import StackView from "./03_StackView";
import { Button } from "react-native";
import StackParams, { TitleView } from "./05_StackParams";
import StackProps from "./04_StackProps";

const Stack = createNativeStackNavigator();

const IndexComponent = ()=>{

    const openHandler =()=>{
        console.log("화면이동");
    }


    return(
        
        <Stack.Navigator
         initialRouteName="StackComponent"
        
         screenOptions={
            {
                title:"My home",
                headerStyle:{backgroundColor:"#f4511e"},
                headerTintColor:"#fff",
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                contentStyle:{
                    backgroundColor:'white'
                }
            }
         }
        
        >
            

             <Stack.Screen
                name="StackView"
                component={StackView}
                options={{
                    title:"스택화면"
                }}
                listeners={openHandler}
            />
            <Stack.Screen
                name="StackComponent"
                component={StackComponent}
            />
            <Stack.Screen
                name="StackProps">
                    {(props) => <StackProps {...props} test="Props"/>}
            </Stack.Screen>

            <Stack.Screen
                name="StackParams"
                options={{
                    headerTitle: (props) => <TitleView/>,
                    headerRight: () => (
                        <Button onPress={()=>alert("this is button")}
                            title="info"
                            color="#000"/>
                    )
                
            }
            }
            component={StackParams}
            />
           
        </Stack.Navigator>
    )


}

export default IndexComponent;
