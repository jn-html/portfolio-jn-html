import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';



const validateInputs = (validate) => {
  let errors = {};

  if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }
  return errors;
  }
}

const INITIAL_VALUES = {  
  title: '',
  company: '',
  location: '',
  description: '', 
  startDate: '',
  endDate: ''
};

const PortfolioCreateForm = () =>  (
  <div>
    <Formik
      // initialValues={{ email: '', password: '' }}
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      // Formik is responsable for executing these functions below
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>

          <FormGroup>
            <Label>Title</Label>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Company</Label>
            <Field className="form-control" type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Location</Label>
            <Field className="form-control" type="text" name="location" />
            <ErrorMessage name="location" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <Field className="form-control" type="textarea" name="description" component="textarea"/>
            <ErrorMessage name="description" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Started Date</Label>
            <Field className="form-control" type="text" name="startDate" />
            <ErrorMessage name="startDate" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Finished Date</Label>
            <Field className="form-control" type="text" name="endDate" />
            <ErrorMessage name="endDate" component="div" />
          </FormGroup>

          <button type="submit" disabled={isSubmitting} >
            Create
          </button>

        </Form>
      )}
    </Formik>
  </div>
);
      
export default PortfolioCreateForm;




// ------------- REMINDER CODE BELOW -----------








// ------FORMIK BASE, REGROUPED FUNCTIONS ------

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



// -------------BASIC FORM ------------

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
