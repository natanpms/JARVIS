import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, View } from "react-native";
import styles from "../../../styles/authForm/style";

export default function AuthHead() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Text style={styles.logoEmoji}>
          <FontAwesome name="money" size={24} color="black" />
        </Text>
      </View>

      <Text style={styles.appName}>Jarvis Assistance</Text>
      <Text style={styles.subtitle}>
        Assiste inteligente para suas finanças e assinaturas
      </Text>
    </View>
  );
}
