import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";


function HeaderButton({ onPress,children }) {
    return (
        <View style= {styles.buttonContainer}>
        <Pressable
            onPress={onPress}
            android_ripple={{ color: "#cccc" }}
            style = {({ pressed }) => [styles.button, pressed? styles.buttonPressed : null]}
        >
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
        </View>
    )
}
export default HeaderButton;

const styles = StyleSheet.create({

    buttonContainer:{
       overflow:'hidden'
    },

    buttonPressed: {
        // backgroundColor: '#3b2622ff',
        marginRight: 16,
        overflow:"hidden",
        opacity:0.6,
    },
    button:{
        backgroundColor:'#d6a79dff',
        marginRight: 16,
        paddingHorizontal:6,
        paddingVertical:4,
        borderRadius:12,
        overflow:"hidden",
        
    },
    text:{
        fontSize:14,
        color:'#3a1209ff',
        fontWeight:'bold'
    }
})

