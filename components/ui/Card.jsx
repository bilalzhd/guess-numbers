import { View, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

function Card({ children }) {
  return (
    <View style={styles.inputContainer}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        marginTop: 36,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.45,
        alignItems: 'center'
    },
})