import React from "react";

// const Card = ()=>{
//     return (
//         <div className="card">
//         <h1>Manav Yadav</h1>
//         <img src="https://images.unsplash.com/photo-1778648185595-6cab6bbd355a?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Image"></img>
//         <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <button>Click Me</button>
//       </div>
//     )
// }
function Card(user) {
    return (
        <div className="card">
        <h1>{user.name}</h1>
        <img src={user.image} alt="Profile Image"></img>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Click Me</button>
      </div>
    )
}

export default Card;
