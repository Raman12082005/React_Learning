import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
      <Card name="Manav Yadav" image="https://images.unsplash.com/photo-1778648185595-6cab6bbd355a?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name="Aryan" image="https://images.unsplash.com/photo-1780995174272-3515544edd64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name="Ramandeep" image="https://images.unsplash.com/photo-1780592657995-60f814efa4a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App;

