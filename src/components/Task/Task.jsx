import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Task({ item, deleteItem }) {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <View style={[styles.taskContainer, { backgroundColor: check ? '#388e3c75' : '#23395d' }]}>
      <TouchableOpacity style={styles.taskCircle} onPress={handleCheck}>
        {check && <Image source={require('../../assets/check.png')} style={styles.iconImage} />}
      </TouchableOpacity>
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskText}>{item.value}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteItem(item.key)}>
        <Image source={require('../../assets/lixo.png')} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
}
