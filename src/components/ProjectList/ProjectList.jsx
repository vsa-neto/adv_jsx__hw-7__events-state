import { Component } from "react";
import "./css/ProjectList.css";

export default class ProjectList extends Component {
  render() {
    const {selectList} = this.props;

    return (
      <div className="listView" >
        {
          selectList.map((item, index) => (
            <img key={index} name={item.category} src={item.img} className="item" />
          ))

        }
      </div>
    )
  }
}