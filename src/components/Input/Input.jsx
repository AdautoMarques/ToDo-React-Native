import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Keyboard } from "react-native";
import { styles } from "./styles";

export default function Input({handleSubmit}){
  const [value, setValue] = useState('')

  const onChangeText = (text) => {
    setValue(text)
  }

  const handleAddTask = () => {
    setValue(handleSubmit(value))
    setValue('')
    Keyboard.dismiss()
  }

  return(
    <View>
      <View>
        <TextInput 
          placeholder="Adicione sua tarefa"
          placeholderTextColor="#90CAF9"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <TouchableOpacity 
          onPress={handleAddTask}
          style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}