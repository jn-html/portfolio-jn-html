import React from "react";
import DatePicker from "react-datepicker";
// import moment from 'moment';
import { FormGroup, Label } from 'reactstrap';



import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dateValue: new Date()
    };
  }

  handleChange = (date) => {
    // debugger;

    // const formattedDate = date.format();

    this.setState({
      dateValue: date
    });
  };

  render() {
    const { label } = this.props;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          <DatePicker
            selected={this.state.dateValue}
            onChange={this.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            // maxDate={}
            dropDownMode="select"
          />
        </div>
      </FormGroup>
    );
  }
}
