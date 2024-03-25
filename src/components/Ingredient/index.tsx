import { style } from "@/app/index/style";
import { Pressable, PressableProps, Text, Image } from "react-native";

export type IngredientsProps = {
    name: string
    image: string
    selected?: boolean
}

export function Ingredient({name, image, selected = false, ...rest}: IngredientsProps & PressableProps){
    return (
        <Pressable style={style.container} {...rest}>
            <Image source={require("@/assets/tomato.png")} style={style.image}/>
            <Text style={style.title}>Maça</Text>
        </Pressable>
    )
}