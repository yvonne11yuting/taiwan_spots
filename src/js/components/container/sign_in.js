import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { registerMember } from "../../actions";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} autoComplete="off"/>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(data) {
    this.props.registerMember({...data}, (res, type, err) => {
      if(err) {
        let errMsg = type === 'register' ? '註冊失敗' : '未註冊帳號'
        alert(errMsg);
      }
      this.props.hideSignin();
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="sign-in">
        <Field name="email" label="帳號" component={this.renderField} />
        <Field name="pwd" label="密碼" component={this.renderField} />
        <button type="submit" onClick={
          handleSubmit(({email, pwd}) => {
            this.onSubmit({email, pwd, type:"register"})
        })}>註冊</button>
        <button type="submit" onClick={
          handleSubmit(({email, pwd}) => {
            this.onSubmit({email, pwd, type:"signin"})
        })}>登入</button>
      </form>
    );
  }
}

function validate(values) {
  const emailRule = RegExp(/\S+@\S+\.\S+/);
  const errors = {};

  if (!values.email || !emailRule.test(values.email)) {
    errors.email = "請輸入正確的Email";
  }
  if (!values.pwd || (typeof values.pwd === "string" && values.pwd.length < 6)) {
    errors.pwd = "密碼過短";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'register',
})(connect(null, { registerMember })(SignIn));