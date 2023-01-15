import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import InstructionText from "../components/ui/InstructionText";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import { Colors } from "../utils/colors";


function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function inputHandler(enteredNumber) {
        setEnteredNumber(enteredNumber);
    }
    function confirmNumberHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid value",
                'Number has to be a number between 1 and 99',
                [{ text: 'Ok', style: 'destructive', onPress: () => setEnteredNumber("") }]);

            return;
        }
        onPickedNumber(chosenNumber)

    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput onChangeText={inputHandler} keyboardType="number-pad" maxLength={2} style={styles.textInput} value={enteredNumber} />
                <View style={styles.buttons}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => setEnteredNumber("")}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },  
    textInput: {
        height: 50,
        width: 50,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        textAlign: 'center',
        color: Colors.accent500,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 8
    },
    buttons: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1
    },
})