function App() {
  return (
    <div className="app">
      <h1>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the ingredient"
          autoComplete="Off"
          className="app__seearch"
        />
        <select className="app__healthLabels">
          <option value="vegant">vegan</option>
          <option value="unpreort">2</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
