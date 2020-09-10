
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import CounterOld from './components/CounterOld'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/Stylesheet'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import NewtonForm from './components/NewtonForm';
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Parent from './components/Parent';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/userContext'
import GetDataFromServer from './GetDataFromServer';
import PostForm from './components/PostForm';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


class App extends Component {
  render()
  {
  return (
    <div className="App">
    {/*<Router>
    <Nav/>
    <Switch>
    
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/shop" component={Shop}/>
    <Route path="/shop/:id"/>
    
    </Switch>
    
    </Router>*/}
     
    {/*<PostForm/>*/}
    <GetDataFromServer/>
    {/*<UserProvider value="Jayti">
   <ComponentC/>
   </UserProvider>
    
     <Counter>
    {(count,increment)=>(<ClickCounterTwo count={count} increment={increment} />)}
    </Counter> 

    <Counter>
    {(count,increment)=>(<HoverCounterTwo count={count} increment={increment} />)}
    </Counter> 
   
  <ClickCounter name='Jayti'/>
    <HoverCounter name='Jayti'/>
    

<ErrorBoundary>
    <Hero heroName='batman' name='a'/>
    </ErrorBoundary>
    <ErrorBoundary>
   <Hero heroName='superman' name='b'/>
   </ErrorBoundary>
   <ErrorBoundary>
   <Hero heroName='joker' name='c'/>
    </ErrorBoundary>
      
    <FRParentInput/>
  <FocusInput/>
   <RefDemo/>
   <Parent/>
   <FragmentDemo/>
    <Table/>
   <LifecycleA/>
    <NewtonForm/>
    <Form submitted={false}/>
   <StyleSheet primary={false}/>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
    
     <NameList/>
   <UserGreeting/>
    <ParentComponent/>
     <EventBind/>
   <FunctionClick/>
    <ClassClick/>
    <Counter/>
    <Message/>
      <Greet name='Vishwas' heroName='Coderevolution'><input name='Name'></input></Greet>
      <Greet name='Jayti' heroName='Riya'/>
      <Greet name='Akshat' heroName='Bla Bla'/>
  <Welcome  name='Vishwas' heroName='Coderevolution'><p>Hy</p></Welcome>*/}
      {/*<Hello/>*/}
    </div>
  );
}
}
const Home=()=>{
  return (
    <h1>
    Home Page
    </h1>
  )
}

export default App;
