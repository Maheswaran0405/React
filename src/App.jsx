import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home, { ButtonNew } from './components/Home'
import { PlayGround,Greeting,GetValue,Condition } from './components/Home'
import ArrayRendering from './components/ArrayRendering'
import Student from './components/Student'
import { Map,ArrObj } from './components/ArrayRendering'
import Counter from './components/Counter'
import ReactForm from './components/ReactForm'
import Users from './components/Users'
import Timer from './components/Timer'
import RenderCount from './components/RenderCount'
import AutoFocus from './components/AutoFocus'
// import { ExpenCal } from './components/ExpenCal'
import { Lyrics } from './components/Lyrics'
import ChildCom from './components/ChildCom'
import {UserContext} from './components/Context/UserContext'
import Login from './components/Login'
import CheckOut from './components/CheckOut'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
const About = lazy(() => import ('./components/About'))
// import About from './components/About'
import ProductDetails from './components/ProductDetails'
import PageNotFound from './components/PageNotFound'
import Contact from './components/Contact'
import Price from './components/Price'
import Protected from './components/Protected'
import Dashboard from './components/Dashboard'
import Counter1 from './components/Counter1'


function App() {
  
  const [user, setUser] = useState("");



  // const [count, setCount]= useState(0);

  // function ShowMessage(name){
    
  //   alert("Button Clicked"+" "+name)
  // }

  // const Arr=[
  //     {id:1,name:"Sakthi",age:22,message:"Good"},
  //     {id:2,name:"Mathi",age:23,message:"Excellent"},
  //     {id:3,name:"jey",age:25,message:"Great"}
  //   ];

  return (
    <>
    <Home/>
       <div>
        {/* <Counter1 /> */}

         {/* <UserContext.Provider value={{user,setUser}} >
        {user ? <CheckOut /> : <Login />}
        </UserContext.Provider> */}

         <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about" state={{name:"Jeeva", age:24}}>About</Link>
            <Link to="/about/contact">About</Link>
            <Link to="/product/1/price">Product</Link>
            <Link to="/pagenotfound">PageNotFound</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <Suspense fallback={ <h2>Loading...</h2>}><About /></Suspense>
            } >

                {/* <Route path="contact" element={<Contact />} /> */}
            </Route>

            <Route path="/product/:id" element={<ProductDetails />}>
                  <Route path="price" element={<Price />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />

            <Route path="/dashboard" element={<Protected isLogged ={true} >
              <Dashboard />

              </Protected>}/>
              
          </Routes>

        
    
        
        </BrowserRouter>



      </div>
      {/* <ChildCom />
      <Lyrics /> 
      <ExpenCal />
      <AutoFocus /> */}
      {/* <RenderCount />
      <Timer />
      <Users/> 
      <ReactForm />
      
      <PlayGround/>
      <Greeting name="Tharun"/>
      <Greeting name="Mani"/>
      <Greeting name="Mahi"/>
      <GetValue name="mahi" age={24}/>
      <GetValue name="Maran"/>
      <Condition name="Dhoni"/>
      <Condition name="Dhoni" age={25}/>
      <ButtonNew onClick={ShowMessage} name="Jeeva"/>
      <Map/>
      <ArrObj/> 
      <Counter 
      count={count}
      setCount={setCount}
      />
      <ArrayRendering/>
      {
        Arr.map((student)=> {
          console.log(student)
          return(
            <Student key={Student.id} name={student.name} age={student.age}/>
          )
        })
      } */}

    </>
  )
}

export default App
