function App() {
  function handlename(){
    const names = ['Earn','Growth',"Give"]
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <div>
      <p>Let's {handlename()} Money</p>
    </div>
  );
}

export default App;
