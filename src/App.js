import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import TaskList from './pages/TaskList';
import Createtask from './pages/Createtask';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import Login from './components/Login';
import Register from './components/Register';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <BrowserRouter>
    <TodoProvider>
    <Navigation />
    <Routes>
    <Route path="/" element={<Navigate to="/login"/>}></Route>
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/task-list' element={<TaskList />}></Route>
          <Route path='/create-task' element={<Createtask />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>

    </Routes>
    </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
