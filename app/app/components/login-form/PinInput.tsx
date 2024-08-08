import React, { Component } from "react";
import PinInput from "react-pin-input";

class Pin extends Component {
  pin: any;
  state = {
    input: "",
    layoutName: "default",
  };

  onChange = (input: string) => {
    this.setState({
      input: input,
    });
  };

  handleClear = () => {
    this.setState({
      input: "",
    });

    this.pin.clear();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };
  onSubmitHandler = (e:any) => {
    this.pin.values = e;
    if (this.state.input == "1234") {
      window.localStorage.setItem("pin", this.state.input);
      window.location.href = "https://qnm081.csb.app/home";
    } else {
        window.alert("Invalid Pin");
      window.location.reload();
    }
  };

  inputStyle = {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: 20,
    border: 0,
    background: "#000",
    margin: "30px 0px 0px",
    color: "#fff",
    textAlign: "Center",
  };

  render() {
    return (
      <div className="Pin home-container">
        <div className="text white-text">
          <h2 id="todaysDate"> </h2>
        </div>
        <PinInput
          length={4}
          focus
          ref={(p: any) => (this.pin = p)}
          type="numeric"
          inputMode="number"
          // pattern="\d*"
          //value={this.state.input}
          onChange={this.onChange.bind(this)}
          onComplete={this.onSubmitHandler}
        />
      </div>
    );
  }
}
export default Pin;
