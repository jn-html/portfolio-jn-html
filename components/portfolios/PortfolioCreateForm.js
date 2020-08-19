import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../../components/form/PortDate';
import moment from 'moment';



const validateInputs = (values) => {
  let errors = {};

  const entries = Object.entries(values);
  // destructuring array of key and value
  entries.forEach(([key,value])=> {

    // if(!values[key] && (values[key] === 'startDate' || values[key] === 'endDate')) {
    //   errors[key] = `Field ${key} is required!!`;
    // }
    if(!values[key] && key !== 'endDate') {
      errors[key] = `Field ${key} is required!!`;
    }
  })

  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date can not be before Start Date!!';
  }

  return errors;
  }


const INITIAL_VALUES = {  
  title: '',
  company: '',
  location: '',
  description: '', 
  startDate: '',
  endDate: '',
};

const PortfolioCreateForm = (props) =>  (
  <div>
    <Formik
      // initialValues={{ email: '', password: '' }}
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      // Formik is responsable for executing these functions below
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

          <Field 
            type="text" 
            name="title" 
            label="Title"
            component={PortInput} 
          />
          <Field 
            type="text" 
            name="company"
            label="Company (if no company, write: Personal)"
            component={PortInput}
          />
          <Field 
            type="text" 
            name="location"
            label="Location"
            component={PortInput} 
          />
          <Field 
            type="textarea" 
            name="description" 
            label="Description"
            component={PortInput}
          />
          <Field 
            name="startDate" 
            label="Start date"
            component={PortDate}
          />
          <Field 
            name="endDate" 
            label="End Date"
            canBeDisabled={true}
            component={PortDate}
          />

          <Button color="success" size="lg" type="submit" disabled={isSubmitting} >
            Create
          </Button>

        </Form>
      )}
    </Formik>
  </div>
);
      
export default PortfolioCreateForm;




// ------------- REMINDER CODE BELOW -----------


// ----------------------------- SAME FUNCTION WITH KEY OR ENTRIES ------------------------
//----------- (ONLY GET VALUE OF KEY) ------------      || -------- (GETS AN ARRAY OF KEY AND VALUE) ------------
  // const keyArray = Object.keys(values);              ||  const entries = Object.entries(values);
//                                                      ||  // destructuring array of key and value       
  // keyArray.forEach((key)=> {                         ||  entries.forEach(([key,value])=> {
  //   if(!values[key]) {                               ||  if(!values[key]) {
  //     errors[key] = `Field ${key} is required!!`     ||  errors[key] = `Field ${key} is required!!`;
  //   }                                                ||  }
  // })                                                 ||  })
  // return errors;                                     ||  return errors;
  // }                                                  ||  }


// ------ EXAMPLE OF SINGLES FIELD REQUIRED --------
// if (!values.title) {
//   errors.title= "Title is required!!!"
// }
// if(!values.company){
//   errors.company = "Company is required!!!"
// }

//----- EXAMPLE OF REQUIRED FIELD AND AUTHORIZE VALUE ----------
// if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }


// ------ FORMIK BASE && REGROUPED FUNCTIONS ------

{/* <Formik
initialValues={{ email: '', password: '' }}
validate={values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}}
// Formik is responsable for executing these functions below
onSubmit={(values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}}
> */}



// ------------- BASIC FORM ------------

// import React from 'react';


// export default class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       language: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     // const field = event.target.name
//     this.setState({
//       // [field]: event.target.value
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     alert('A detail was submitten : ' + this.state.title+' '+this.state.description+' '+this.state.language);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Label>
//           Name :
//           <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//         </Label>
//         <Label>
//           Description:
//           <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//         </Label>
//         <Label>
//           Pick your favorite Programming Language:
//           <select name="language" value={this.state.language} onChange={this.handleChange} >
//             <option selected value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="c++">C++</option>
//             <option value="c#">C#</option>
//           </select>
//         </Label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
