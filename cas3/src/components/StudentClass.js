import React from "react";
export class StudentClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          Students: {this.props.student.name} {this.props.student.lastName}{" "}
          {this.props.student.index}
        </h2>
      </div>
    );
  }
}
