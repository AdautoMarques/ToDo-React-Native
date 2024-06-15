import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Header(){
  return(
    <View>
      <Text style={styles.title}>ToDo List</Text>
    </View>
  )
}