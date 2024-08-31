import react from "react";
import "./App.css";
import { UserCard } from "./UserCard";

function App() {
  return (
    <div>
      <UserCard
        name="Kathy Xiong"
        age="26"
        phoneNumber="(920)-888-8888"
        address="123 Otter Street"
      />
    </div>
  );
}

export default App;
