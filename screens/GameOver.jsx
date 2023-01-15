import { View, Image, StyleSheet, Text } from "react-native"
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../utils/colors";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber} </Text> 
        rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame} style={styles.button}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOver;
const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  highlightText: {
    fontWeight: 'bold',
    color: Colors.primary500
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },

})