import ModuleList from "../Modules/ModuleList";
import "./index.css";
function Home() {
  return (
    <div className="row">
      <div className="col-10">
        <h2>Home</h2>
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
      <div className="col-2">
        <button className="btn btn-primary">Import existing content</button>
        <button className="btn btn-primary">Import from Commons</button>
        <button className="btn btn-primary">Choose Home Page</button>
        <button className="btn btn-primary">View Course Stream</button>
        <button className="btn btn-primary">New Announcement</button>
        <button className="btn btn-primary">New Analytics    </button>
        <button className="btn btn-primary">View Course Notifications</button>
        Todo
      </div>
    </div>
  );
}
export default Home;
