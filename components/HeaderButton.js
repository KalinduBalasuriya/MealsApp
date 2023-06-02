import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "expo-vector-icons"; 

function HeaderButton({icon,color,onPress }) {
    return (

        <Pressable onPress={onPress} style={styles.buttonContainer}>
           <Ionicons name={icon} size={24} color= {color} />
        </Pressable>
    );

}
export default HeaderButton;

const styles = StyleSheet.create({

    buttonContainer: {
        overflow: 'hidden',
        paddingRight:16
    },

    pressed: {
        
        opacity: 0.6,
    },
    button: {
        backgroundColor: '#d6a79dff',
        marginRight: 16,
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: "hidden",

    },
    text: {
        fontSize: 14,
        color: '#3a1209ff',
        fontWeight: 'bold'
    }
})


