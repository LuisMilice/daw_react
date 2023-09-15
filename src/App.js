import './App.css';
import { Routes, Route } from 'react-router-dom';
import HelloWorld from './components/Other/HelloWorld';
import MyName from './components/Other/MyName';
import Counter from './components/Other/Counter';
import TodoList from './components/Other/TodoList';
import Lifecycle from './components/Other/Lifecycle';
import ConditionalRendering from './components/Other/ConditionalRendering';
import HomePage from '../src/pages/Home';
import AboutPage from '../src/pages/About';
import ServicesPage from '../src/pages/Services';
import ContactPage from '../src/pages/Contact';

function App() {

  return (
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/helloworld' element={<HelloWorld />} />
        <Route path='/myname' element={<MyName />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/lifecycle' element={<Lifecycle />} />
        <Route path='/conditionalrendering' element={<ConditionalRendering />} />
      </Routes>
  );
}

export default App;
