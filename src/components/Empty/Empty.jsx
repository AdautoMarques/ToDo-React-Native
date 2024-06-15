import { Text, View } from "react-native"
import { styles } from "./styles"

export default function Empty(){
  return(
    <View>
      <Text style={styles.subTitle}>A sua lista de Tarefas esta vazia!</Text>
    </View>
  )
}