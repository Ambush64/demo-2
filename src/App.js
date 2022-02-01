import "./index.css";
import data from "./data/data.json";
import Cards from "./components/Cards";

const App = () => {
  console.log(data);
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-around grid">
          <Cards data={data} />
        </div>
      </div>
    </>
  );
};

export default App;
