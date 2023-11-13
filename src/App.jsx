// import { useState } from 'react';
import { cources } from './data';
import './App.css';
import UserCard from './components/userCard';

function App() {
  return (
    <>
      <div className="user__cards">
        {cources.map((userObj)=>{
          return (
            <UserCard userObj={userObj} userInfo={userObj.user} key={userObj.id}/>
          )
        })}
      </div>
    </>
  )
}

export default App
