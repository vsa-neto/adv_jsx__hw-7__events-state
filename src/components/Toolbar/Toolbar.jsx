import {Component} from "react";
import "./css/Toolbar.css";

export default class Toolbar extends Component {
  render() {
    const {filters, selected, onSelectFilter} = this.props;

    return (
      <div className="toolbar" onClick={onSelectFilter}>
         { filters.map((item, index) =>(
             item == selected ? 
             <li key={index} name={item}  className="active" >{item}</li> : 
             <li key={index} name={item}>{item}</li>
         )) }
      </div>
    )
  }
}