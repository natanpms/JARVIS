import AuthCard from "@/src/components/Auth/AuthCard";
import AuthHead from "@/src/components/Auth/AuthHead";
import AuthWarning from "@/src/components/Auth/AuthWarning";
import styles from "@/src/styles/authForm/style";
import React from "react";
import { View } from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <AuthHead />
      <AuthCard />
      <AuthWarning />
    </View>
  );
}
