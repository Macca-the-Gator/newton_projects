import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";


export  default function Sobre(){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Sobre nós</Text>
            <Link href={"/"}>
                <Text>Voltar</Text>
            </Link>
        </View>
    )
}
const style = StyleSheet.create({
    container:{flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f1808f"
    },
    titulo:{fontSize:30,
        color:"#0519f8"
    }

})