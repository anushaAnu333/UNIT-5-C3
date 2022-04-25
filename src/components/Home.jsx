
import React from 'react'
import './Home.css'
const Home = () => {
 return (
    <>
    <div className="n-wrapper">
        
        <div className="n-centre">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <button>Home</button>
                    <button>Employee List</button>
                    <button>Admin</button>
                    <button>Login</button>
                   

                </ul>
            </div>
           
        </div>
    </div>
  <h3 className="welcome">Welcome To employee management system</h3>
  <div className="home">
    <span className="stats">Stats</span>
    <div>
      Total Employees<span className="totalemp"></span>
    </div>
    <div>
      Total Terminated: <span className="total_terminated"></span>
    </div>
    <div>
      Total Promoted: <span className="total_promoted"></span>
    </div>
    <div>
      Total New: <span className="total_new"></span>
    </div>
  </div>
    </>
  );
};

export default Home;
