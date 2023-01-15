import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} android_ripple={{ color: Colors.primary600}} 
      style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
        <Text style={[styles.buttonText, style]}>{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden'

  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})