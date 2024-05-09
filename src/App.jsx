import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Sem from './components/Sem.jsx'
import QuesPaper from './components/QuesPaper.jsx'
import PracFiles from './components/PracFiles.jsx'
import Notes from './components/Notes.jsx'

function App() {

const [darkMode, setDarkMode] = React.useState(false)

let semObject = [    
  {
  path: "/",
  element: <Home darkMode={darkMode} setDarkMode={() => setDarkMode(prev => !prev)}></Home>
  }
]

for (let i = 1; i <= 7; i++) {
  let tmp = {
    path: `/sem${i}`,
    element: <Sem sem={i} darkMode={darkMode} setDarkMode={() => setDarkMode(prev => !prev)}></Sem>
  }
  semObject.push(tmp)
}

for (let i = 1; i <= 7; i++) {
  let tmp = {
    path: `/sem${i}/quesPaper${i}`,
    element: <QuesPaper sem={i}></QuesPaper>
  }
  semObject.push(tmp);
}

for (let i = 1; i <= 7; i++) {
  let tmp = {
    path: `/sem${i}/pracFiles${i}`,
    element: <PracFiles sem={i}></PracFiles>
  }
  semObject.push(tmp);
}

for (let i = 1; i <= 7; i++) {
  let tmp = {
    path: `/sem${i}/notes${i}`,
    element: <Notes sem={i}></Notes>
  }
  semObject.push(tmp);
}

  const router = createBrowserRouter(semObject)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
