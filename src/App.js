import "./styles.css";

function App() {
  const Clicked = () => {
    const Name = document.getElementById("name");
    const Email = document.getElementById("email");
    const Number = document.getElementById("number");

    let Li = document.createElement("li");
    Li.innerText = Name.value;
    let Li2 = document.createElement("li");
    Li2.innerText = Email.value;
    let Li3 = document.createElement("li");
    Li3.innerText = Number.value;
    Name.value = "";
    Email.value = "";
    Number.value = "";

    const Div = document.getElementById("root");
    Div.appendChild(Li);
    Div.appendChild(Li2);
    Div.appendChild(Li3);
  };
  return (
    <div className="App">
      <label> Name: </label>
      <input type="text" id="name" placeholder="Enter Your Name"></input>
      <br />
      <label>Email: </label>
      <input type="email" id="email" placeholder="Enter Your Email Id"></input>
      <br />
      <label>Mobile No: </label>
      <input type="text" id="number" placeholder="Enter Your Number"></input>
      <br />
      <button onClick={Clicked}>Submit</button>
      <br />
      <div id="root"></div>
    </div>
  );
}
export default App;
