
import { Button, FormGroup, Label, Input } from 'reactstrap';


const PortInput = ({
  label,
  type,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  debugger;
  return (
  <FormGroup>
    <Label>{label}</Label>
    <Input type={type} {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <FormGroup className="error">{errors[field.name]}</FormGroup>}
  </FormGroup>
)};

export default PortInput;
