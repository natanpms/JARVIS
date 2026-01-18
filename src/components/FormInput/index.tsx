import { Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import styles from "../../styles/authForm/style";
import { FocusedInput } from "../../types/form";

type FormInputProps = {
  control: any;
  name: "name" | "email" | "password";
  placeholder: string;
  secureTextEntry?: boolean;
  focusedInput: string | null;
  setFocusedInput: React.Dispatch<React.SetStateAction<FocusedInput>>;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export default function FormInput({
  control,
  name,
  placeholder,
  secureTextEntry,
  focusedInput,
  setFocusedInput,
  children,
  icon,
}: FormInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View
          style={[
            styles.inputWrapper,
            focusedInput === name && styles.inputWrapperFocused,
          ]}
        >
          {icon && icon}

          <TextInput
            placeholder={placeholder}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={onChange}
            onFocus={() => setFocusedInput(name)}
            onBlur={() => setFocusedInput(null)}
            style={styles.input}
          />
          {children}
        </View>
      )}
    />
  );
}
