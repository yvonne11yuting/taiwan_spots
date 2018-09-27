import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { registerMember, showSignIn } from "../../actions";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} { ...field.input} autoComplete="off"/>
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
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="sign-in">
        <form className="sign-in-form">
          <Field name="email" label="帳號" type="text" component={this.renderField} />
          <Field name="pwd" label="密碼" type="password" component={this.renderField} />
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
            <a className="btn btn-light" onClick={() => this.props.showSignIn(false)}>取消</a>
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
})(connect(null, { registerMember, showSignIn })(SignIn));