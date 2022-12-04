import React from "react";
import { useState } from "react";
import { FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
    


const Newsletter = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
        console.log(input);
        db.collection("emails").add({
            email: input,
            time: firebase.firestore.FieldValue.serverTimeStamp(),
        })
    }
  }
  return (
    <>
        <form className="" onSubmit={submitHandler}>
            <input className="" type="email" onChange={inputHandler} />
            <button type="submit">Submit</button>
        </form>
    </>
  );
};

export default Newsletter;
