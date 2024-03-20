import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props ={
    name: string;
    color?: string; 
}

export function Item({name,color} : Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.name,{color}]}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}