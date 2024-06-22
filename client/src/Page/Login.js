import {NewButton} from "../Component/Button";

export default LoginPage(){
    return (<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {!data?"Loading...":data}
          </p>
          <NewButton name="This is a button"/>

        </header>
      </div>);
};