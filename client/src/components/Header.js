function Header({ signOut }) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h1>My Stores WebApp</h1>
          </div>
          <div className="col-2">
            <button onClick={signOut}>Sign Out</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  