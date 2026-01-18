import Toast from "react-native-toast-message";

export function showError(msg: string) {
  Toast.show({
    type: "error",
    text1: "Erro ao processar:",
    text2: msg,
  });
}

export function showSuccess(msg: string) {
  Toast.show({
    type: "success",
    text1: "Sucesso!",
    text2: msg,
  });
}

export function showInfo(msg: string) {
  Toast.show({
    type: "info",
    text1: "Atenção:",
    text2: msg,
  });
}
