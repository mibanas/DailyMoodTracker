import { useState } from "react";
import './App.css';

function App() {
  const [selectedMood, setSelectedMood] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const moods = ['😄', '😢', '😡', '😴']; // Mood icons

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    switch (selectedMood) {
      case '😄':
        setMessage('You are feeling happy!');
        break;
      case '😢':
        setMessage('You are feeling sad.');
        break;
      case '😡':
        setMessage('You are feeling angry!');
        break;
      case '😴':
        setMessage('You are feeling sleepy.');
        break;
      default:
        setMessage('');
        break;
    }
    setSubmitted(true);
  };

  const handleReturn = () => {
    setSelectedMood('');
    setSubmitted(false);
    setMessage('');
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold mb-4">Mood Selector</h1>
    {!submitted ? (
      <div className="flex gap-4">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(mood)}
            className={`text-4xl p-2 rounded-full ${
              selectedMood === mood ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
    ) : (
      <>
        <p className="text-xl text-center mb-4">{message}</p>
        <button
          onClick={handleReturn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Return to reselect
        </button>
      </>
    )}
    {!submitted && selectedMood && (
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    )}
  </div>
  );
}

export default App;
