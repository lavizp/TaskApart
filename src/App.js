import './app.css'
import { ThemeProvider } from "styled-components";
import TasksContainer from './Components/TasksContainer';
import NavbarLeft from './Components/NavbarLeft';
import { MainContainer } from './styled-components/MainContainer';
import Navbar from './Components/Navbar';
import NotesTab from './Components/NotesTab';
import AddTask from './Components/AddTask';
import { useState } from 'react';
function App() {

  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  const[isAddTaskVisible, setAddTask] = useState(true);
  function displayAddTask(){
    setAddTask(false);
    console.log("here");
  }
  return (

<ThemeProvider theme={theme}>
  <button onClick={displayAddTask}>asd</button>
  <Navbar/>
  <AddTask hidden={isAddTaskVisible}/>
  <MainContainer>
    <NavbarLeft id={2}/>
    <TasksContainer displayAddTask={displayAddTask}/>
    <NotesTab/>
  </MainContainer>
  </ThemeProvider>
  );
}

export default App;
