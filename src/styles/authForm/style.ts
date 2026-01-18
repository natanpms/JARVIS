import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },

  logo: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  logoEmoji: {
    fontSize: 28,
  },

  appName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  subtitle: {
    color: "#eee",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    width: "100%",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
    textAlign: "center",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 16,
  },

  inputWrapperFocused: {
    borderColor: colors.purple,
    borderWidth: 2,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  eye: {
    fontSize: 16,
  },

  forgot: {
    textAlign: "right",
    fontSize: 14,
    color: colors.purple,
    marginBottom: 20,
  },

  button: {
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    marginBottom: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  createAccount: {
    textAlign: "center",
    fontSize: 13,
    marginBottom: 12,
  },

  createLink: {
    color: colors.purple,
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  tip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F4F0FF",
    padding: 10,
    borderRadius: 10,
  },

  tipText: {
    fontSize: 12,
    color: colors.purple,
    textAlign: "center",
  },

  footer: {
    marginTop: "auto",
    textAlign: "center",
    fontSize: 11,
    color: "#eee",
    paddingVertical: 16,
  },

  backButton: {
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: 8,
    marginTop: "auto",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});

export default styles;
