import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostNew extends React.Component {
  submit(e){
    console.log(e);
    this.props.createPost(e);
  }
  render(){
    function renderError(error){
      console.log(error);
      if(!error){
        return(
          <div className="text-help">
            {error}
          </div>
        );
      }
    }
    const { handleSubmit } = this.props;
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div className={`form-group ${ touched && error ? 'has-danger' : '' }`}>
        <label htmlFor="title">{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control"/>
          <div className="text-help">
            { touched ? error : ''}
          </div>
      </div>
    );
    return(
      <div className="col-md-12">
        <form onSubmit={handleSubmit(this.submit.bind(this))} className="form-group">
        <div className="form-group">
          <Field name="title" component={renderField} label="Title" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <Field name="categories" component={renderField} label="Categories" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <Field name="content" component={renderField} label="Content" type="textarea" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary" style={{"margin":5}}>Submit</button>
      </form>
      </div>
    );
  }
};

function validate(values){
  console.log("ENTRA A VALIDAR");
  const errors = {};
  if(!values.title){
    errors.title = "Please enter a title"
  }
  if(!values.categories){
    errors.categories = "Please enter some categories"
  }
  if(!values.content){
    errors.content = "Please write some content for the post"
  }
  return errors;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createPost: createPost }, dispatch);
}

PostNew = reduxForm({
  form: 'post',
  validate
})(PostNew);

export default connect(null,mapDispatchToProps)(PostNew);
