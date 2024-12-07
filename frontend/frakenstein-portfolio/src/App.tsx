import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'
import TaskNote from './components/TaskNote/TaskNote'
 
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [currentTaskNotes, setCurrentTaskNotes] = useState<string[]>([]);

  console.log(toDo); 
  console.log(currentTaskNotes); 

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField 
        toDo={toDo} setToDo={setToDo} 
        currentTaskNotes={currentTaskNotes} setCurrentTaskNotes={setCurrentTaskNotes}
      />
    </div>
  )
}

export default App;
