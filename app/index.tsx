import { TextInput, View } from 'react-native'
import { useKeyboardAnimation } from 'react-native-keyboard-controller'

export default function Home() {
  const { height, progress } = useKeyboardAnimation()
  console.log(height, progress)
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <TextInput
        placeholder="Test react native keyboard controller"
        style={{
          borderColor: 'red',
          borderWidth: 1,
          height: 100,
          width: '100%',
        }}
      />
    </View>
  )
}
