import React from 'react'

export type TaskNoteProps ={
    currentTaskNotes: string[], 
    setCurrentTaskNotes: React.Dispatch<React.SetStateAction<string[]>>
}

const TaskNote : React.FC<TaskNoteProps> = (
    {currentTaskNotes, setCurrentTaskNotes}
) => {
    
  return (
    <div>
      
    </div>
  )
}

export default TaskNote
