import React from 'react'
import Button from '../Button/Button'
import { TaskNoteProps } from '../TaskNote/TaskNote'
import './InputField.css'

type InputFieldProps = {
  toDo: string,
  setToDo: React.Dispatch<React.SetStateAction<string>>,
} & TaskNoteProps

const InputField : React.FC<InputFieldProps> = ( 
  { toDo, setToDo,  currentTaskNotes, setCurrentTaskNotes}
) => {
  return (
    <form className='input_field'>
        <input type='input' 
          value = {toDo}
          onChange={
            (e) => {setToDo(e.target.value)}
          }
          placeholder='Enter a task' className='input__box'/>
        <Button toDo = {toDo}
        currentTaskNotes={currentTaskNotes} setCurrentTaskNotes={setCurrentTaskNotes} />
      
    </form>
  )
}

export default InputField