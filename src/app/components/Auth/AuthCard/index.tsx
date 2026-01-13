import colors from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import styles from "../../../styles/authForm/style";
import { FocusedInput } from "../../../types/form";
import FormInput from "../../FormInput";

type AuthCardProps = {
  isLogin?: boolean;
};

export default function AuthCard({ isLogin = false }: AuthCardProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(null);

  function onSubmit(data: any) {}

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
      </Text>

      <Text style={styles.cardSubtitle}>
        {isLogin
          ? "Entre com suas credenciais para continuar"
          : "Cadastre-se para começar"}
      </Text>

      {!isLogin && (
        <>
          <Text style={styles.label}>Nome</Text>
          <FormInput
            control={control}
            name="name"
            placeholder="Nome completo"
            focusedInput={focusedInput}
            setFocusedInput={setFocusedInput}
          />
        </>
      )}

      <Text style={styles.label}>Email</Text>
      <FormInput
        control={control}
        name="email"
        placeholder="seu@email.com"
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
        icon={
          <Feather
            name="mail"
            size={20}
            color={colors?.gray}
            style={{ marginRight: 8 }}
          />
        }
      />

      <Text style={styles.label}>Senha</Text>

      <View>
        <FormInput
          control={control}
          name="password"
          placeholder="••••••••"
          secureTextEntry={!showPassword}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
          icon={
            <AntDesign
              name="lock"
              color={colors?.gray}
              size={20}
              style={{ marginRight: 8 }}
            />
          }
        />

        <Pressable
          style={{ position: "absolute", right: 12, top: 12 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AntDesign name="eye" color={colors?.gray} size={24} />
          ) : (
            <AntDesign name="eye-invisible" color={colors?.gray} size={24} />
          )}
        </Pressable>
      </View>

      <Link href={"/"} style={styles.forgot}>
        Esqueceu sua senha?
      </Link>

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      {isLogin ? (
        <Text style={styles.createAccount}>
          Ainda não tem conta?{" "}
          <Link href={"/(auth)/signup/page"} style={styles.createLink}>
            Cadastre-se
          </Link>
        </Text>
      ) : (
        <Text style={styles.createAccount}>
          Já possui conta conta?{" "}
          <Link href={"/"} style={styles.createLink}>
            Faça login
          </Link>
        </Text>
      )}
      <View style={styles.tip}>
        <FontAwesome name="lightbulb-o" size={20} color={colors?.yellow} />
        <Text style={styles.tipText}>
          Dica: Use qualquer email/senha para testar
        </Text>
      </View>
    </View>
  );
}
