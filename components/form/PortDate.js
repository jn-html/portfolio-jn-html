import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Button } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dateValue: new Date()
    };
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);

  }

  handleChange = (date) => {

    this.setState({
      dateValue: date,
    });
    this.setFieldValueAndTouched(date, true)
  };

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden
    })
    this.setFieldValueAndTouched(date, true)
  }

  render() {
    // const { label, field} = this.props;
    // const { touched, errors } = this.props.form;
    const { canBeDisabled, label, field, form: {touched, errors} } = this.props;
    const { isHidden, dateValue } = this.state;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          { !isHidden &&
            <DatePicker
            selected={dateValue}
            onChange={this.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            maxDate={new Date()} 
            dropDownMode="select"
          />
          }
        </div>
        {/* { canBeDisabled && !isHidden && <Button onClick={() => this.toggleDate()}>Still Working Here...</Button>} */}
        { canBeDisabled && !isHidden && <Button onClick={() => this.toggleDate(null)}>Still Working Here...</Button>}
        
        {canBeDisabled && isHidden && 
          <React.Fragment>
            <span>Still Working Here ...</span>
            <Button onClick={() => this.toggleDate(dateValue)}>Set End Date</Button>
          </React.Fragment>
        }

        { touched[field.name] &&
            errors[field.name] && <FormGroup className="error">{errors[field.name]}</FormGroup>}
      </FormGroup>
    );
  }
}





// ------------ REMINDER CODE BELOW -------------
// setFieldValueAndTouched regroups handle & toggle date

