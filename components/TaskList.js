import React from "react"
import { ScrollView } from "react-native"; 
import TaskItem from "./TaskItem"; 



const TaskList = ({
    tasks,
    handleEditTask,
    handleToggleCompletion,
    handleDeleteTask
})=>{

    return (
        <ScrollView>
            {tasks.map((t)=>(
                <TaskItem key= {t.id}
                task={t}
                 // toggling completion, and deletion 
                 handleEditTask={handleEditTask} 
                 handleToggleCompletion={ 
                     handleToggleCompletion 
                 } 
                 handleDeleteTask={handleDeleteTask} 
                />


            ))}

        </ScrollView>

    )

}
export default TaskList;