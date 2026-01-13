import React from "react";
import { View } from "react-native";
import AuthCard from "./components/Auth/AuthCard";
import AuthHead from "./components/Auth/AuthHead";
import AuthWarning from "./components/Auth/AuthWarning";
import styles from "./styles/authForm/style";

export default function Login() {
  return (
    <View style={styles.container}>
      <AuthHead />
      <AuthCard isLogin={true} />
      <AuthWarning />
    </View>
  );
}
