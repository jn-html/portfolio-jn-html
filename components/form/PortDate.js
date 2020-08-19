import React from "react";
import DatePicker from "react-datepicker";
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
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    this.setState({
      dateValue: date
    });

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  };

  render() {
    const { label, field, form: {touched, errors} } = this.props;
    // const { label, field} = this.props;
    // const { touched, errors } = this.props.form;

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
            maxDate={new Date()} 
            dropDownMode="select"
          />
        </div>
          {touched[field.name] &&
            errors[field.name] && <FormGroup className="error">{errors[field.name]}</FormGroup>}
      </FormGroup>
    );
  }
}
