import { useState, useEffect } from "react";
import { Alert, StyleSheet, View, Text, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title';
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/ui/InstructionText";
import Card from '../components/ui/Card';
import GuessLogItem from "../components/ui/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
            return;
        }
    }, [currentGuess, userNumber, onGameOver]);


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    const guessRoundListLength = guessRounds.length;

    function nextGuessHandler(direction) { // direction => lower or higher
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Do not lie!", "You know that this wrong", [{ text: 'Sorry', style: 'cancel' }])
            return;
        }

        if (direction === 'lower') maxBoundary = currentGuess;
        else minBoundary = currentGuess + 1;

        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessRounds(prevRounds => [newRandomNumber, ...prevRounds])
    }

    return (
        <View style={styles.gameScreenContainer}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={{ marginBottom: 10 }}>Higher or Lower?</InstructionText>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                keyExtractor={(item) => item} 
                renderItem={({ item, index }) => <GuessLogItem roundNumber={guessRoundListLength - index} 
                guess={item}/>} 
                data={guessRounds}/>

                {/* {guessRounds.map(guess => <Text key={guess}>{guess}</Text>)} */}
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    gameScreenContainer: {
        flex: 1,
        padding: 24,
        marginTop: 40
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }

})