import './App.css';

function App() {
  return (
    <div className="bod">
      <div className="he">
        <h1>Login Form</h1>
      </div>
      <div className="for">
        <div className="inn">
          <div className="in">
            <div className="name">
              <div className="fn">
                <form>
                  <label>First Name</label><br />
                  <input className="fni" type="text"></input> 
                </form>
              </div>
              <div className="ln">
                <form>
                  <label>Last Name</label><br />
                  <input className="lni" type="text"></input><br />
                </form>
              </div>
            </div>
            <div className="em">
              <form>
                <label>Email Address</label><br />
                <input className="emi" type="text"></input>
              </form>
            </div>
            <div className="mn">
              <form>
                <label>Mobile Number</label><br />
                <input className="mni" type="text"></input>
              </form>
            </div>
            <div className="bg">
              <form>
                <label>Blood Group</label><br />
                <input className="bgi" type="text"></input>
              </form>
            </div>
            <div className="g">
              <form>
                <label>Gender</label><br />
              </form>
            </div>
            <div className="gi">
              <div className="ma">
                <form>
                  <input type="radio"></input>
                  <label>Male</label> 
                </form>
              </div>
              <div className="fe">
                <form>
                  <input type="radio"></input>
                  <label>Female</label> 
                </form> 
              </div>
            </div>
            <div className="ad">
              <form>
                <label>Address</label><br />
                <input className="adi" type="text"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;