import './App.css';
import NavBar from './component/NavBar';
import HeroSection from './component/HeroSection';
import Tickets from './component/Tickets';
import Contacts from './component/Contacts';
import Footer from './component/Footer';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handlerIncrement = (title) => {
    toast.success('In Progress');
    setCount(count + 1);
    setTasks([...tasks, title]);    
  }
  const handlerDecrement = (task, index) => {
    toast.success('Completed!');
    setCount(count - 1);
    setCount2(count2 + 1);
    setResolved([...resolved, task]);
    // setTasks(tasks.filter((taskValue) => {
    //   return taskValue !== task[index];
    // }));
    // setTasks(tasks.splice(index, 1));
    const removed = tasks.splice(index, 1);
    setTasks([...tasks], removed);
  };
  const resolvedDecrement = (task, index) => {
    toast.success('deleted');
    setCount2(count2 - 1);
    // setResolved(resolved.filter((taskValue) => {
    //   return taskValue !== task[index];
    // }));
    const removed = resolved.splice(index, 1);
    setResolved([...resolved], removed);
  };


  return (
    <>
      <NavBar />
      <ToastContainer />
      <HeroSection count={count} count2={count2} />
      <Tickets handlerIncrement={handlerIncrement} handlerDecrement={handlerDecrement} tasks={tasks} resolved={resolved} resolvedDecrement={resolvedDecrement} />
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
