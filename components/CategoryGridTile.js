import { Pressable } from "react-native/types";
import { View } from "react-native/types";

function CategoryGridTile({title, color}){
    return <View>
        <Pressable>
        <View>
            <Text>{title}</Text>
        </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;