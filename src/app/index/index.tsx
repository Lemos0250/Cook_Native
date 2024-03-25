import { View, Text, ScrollView } from "react-native";
import { style } from "./style"
import { Ingredient } from "@/components/Ingredient";
import { useState } from "react";

export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>
                Escolha {"\n"}
                <Text>os Produtos</Text>
            </Text>

            <Text style={style.message}>
                Descubra receitas baseadas nos produtos que você escolheu
            </Text>

            <ScrollView 
            horizontal contentContainerStyle={style.ingredients} 
            showsVerticalScrollIndicator={false}>
                {
                    Array.from({ length: 100 }).map((item, index) => (
                        <Ingredient 
                        key={index} 
                        name="Tomate" 
                        image="" 
                        selected
                        onPress={() => handleToggleSelected(String(index))}/>
                    ))
                }
            </ScrollView>
        </View>
    )
}