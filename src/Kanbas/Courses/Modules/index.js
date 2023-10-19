import ModuleList from "./ModuleList";
import "./index.css";
function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <button className="btn btn-primary">Collapse All</button> 
        <button className="btn btn-primary">View Progress</button> 
        <button className="btn btn-primary dropdown-toggle" type="button" id="publishDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Publish All
        </button>
        <div className="dropdown-menu" aria-labelledby="publishDropdown">
          <a className="dropdown-item" href="#">Option 1</a>
          <a className="dropdown-item" href="#">Option 2</a>
          <a className="dropdown-item" href="#">Option 3</a>
        </div>
        <button className="btn btn-secondary">+ Module</button>
      <ModuleList />
    </div>
  );
}
export default Modules;
