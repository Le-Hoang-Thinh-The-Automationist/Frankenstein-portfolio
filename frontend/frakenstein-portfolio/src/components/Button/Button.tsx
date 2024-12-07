import React from 'react'
import './Button.css'
import { TaskNoteProps } from '../TaskNote/TaskNote'

type ButtonProps ={
  toDo : string
} & TaskNoteProps 

const Button :React.FC<ButtonProps> = (
  { toDo, currentTaskNotes, setCurrentTaskNotes }
) => {

  const addNewTaskNote = () => {
    setCurrentTaskNotes();
  };

 
  return (
    <button className='input__submit' type='submit' onClick={ addNewTaskNote }>
        Add
    </button>
  )
}

export default Button