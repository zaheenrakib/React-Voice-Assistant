import "regenerator-runtime";
import speech, { useSpeechRecognition } from "react-speech-recognition"

function App() {
  const { listening , transcript } = useSpeechRecognition();


  // async function callGPT3API (message: string){
  //   const data = await fetch(" ")
  // }

  return (
    <>
    {
      listening ? (
        <p>Go Ahead I'm listening</p>
      ) : (
        <p>Click the Button and ask me Anything</p>
      )}





    <button onClick={() => speech.startListening()} className="bg-green-500  text-xl text-white m-5 rounded-lg p-2 ">Ask Me Anythings</button>
    {transcript && <div>{transcript}</div> }





    </>
  )
}

export default App
