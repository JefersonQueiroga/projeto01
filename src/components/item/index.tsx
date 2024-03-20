import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Item() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
       Jeferson Queiroga
      </Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}