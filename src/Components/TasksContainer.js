import React, { useEffect, useState } from 'react'
import { MainContainer } from '../styled-components/MainContainer'
import TaskColumn from './TaskColumn'
import styled from "styled-components";

import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { update_task } from '../Redux/taskSlice';

const CenterTasksContainer = styled.div`
    width: 70%;
    height: "100%";
    padding-left: 20px;
    background-color: ${props=> props.theme.backgroundColor};

    h1{
        color: white;
        font-size: 40px;
    }

`


export default function TasksContainer({displayAddTask, taskdata}) {

  const [isDragging, setIsDragging] = useState(false);

  const diapatch = useDispatch();

  function handleOnDragEnd (result){
    diapatch(update_task(result));
    setIsDragging(false);

  }
  function handleOnDragStart()
  {
    setIsDragging(true);
  }

  return (
    <CenterTasksContainer>
        <h1>Tasks:</h1>
        <MainContainer gap="30px">
          <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="BackLog" data={taskdata['BackLog']}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="To-Do" data={taskdata['To-Do']}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="In-Process" data={taskdata['In-Process']}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="Completed" data={taskdata['Completed']}/>
            </DragDropContext>

        </MainContainer>


    </CenterTasksContainer>
  )
}
