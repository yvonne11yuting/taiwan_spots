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
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} autoComplete="off"/>
        <span className="form-err-msg">
          {touched ? error : ""}
        </span>
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
      <div className="sign-in">
        <form className="sign-in-form">
          <Field name="email" label="帳號" component={this.renderField} />
          <Field name="pwd" label="密碼" component={this.renderField} />
          <div className="form-action">
            <button
              type="submit"
              className="btn btn-submit"
              onClick={
              handleSubmit(({email, pwd}) => {
                this.onSubmit({email, pwd, type:"signin"})
              })}
            >登入</button>
            <button
              type="submit"
              className="btn btn-default"
              onClick={
              handleSubmit(({email, pwd}) => {
                this.onSubmit({email, pwd, type:"register"})
              })}
            >註冊</button>
            <a className="btn btn-light" onClick={() => this.props.hideSignin()}>取消</a>
          </div>
        </form>
      </div>
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