import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '12', //input-text
      age: '', //input-number
      description: '', //textarea
      industry: 'aaa', //select
      sex: 'man', //radio
      isSelected: false, //checkbox是否选中
      hobby: ['java', 'js', 'php'], //checkbox多选
    }
    this.fileInput = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <h1>受控组件</h1>
          <label>
            姓名:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
            <span>{this.state.name}</span><br />
          </label>
          <label>
            年龄:
            <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange}/>
            (<span>{this.state.age}</span>)<br />
          </label>
          <label>
            描述:
            <textarea name="description" value={this.state.description} onChange={this.handleInputChange}/>
            (<span>{this.state.description}</span>)<br />
          </label>
          <label>
            行业:
            <select name="industry" value={this.state.industry} onChange={this.handleInputChange}>
              <option value="aaa">食品</option>
              <option value="bbb">美妆</option>
              <option value="ccc">百货</option>
              <option value="ddd">服饰</option>
            </select>
            (<span>{this.state.industry}</span>)<br />
          </label>
          <label>
            性别:
            <div onChange={this.handleInputChange} className="input-wrapper">
              <input name="sex" type="radio" value="man" defaultChecked={this.state.sex === 'man'} />男
              <input name="sex" type="radio" value="woman" defaultChecked={this.state.sex === 'woman'} />女
            </div>
            (<span>{this.state.sex}</span>)<br />
          </label>
          <label>
            是否成年:
            <div className="input-wrapper">
              <input name="isSelected" type="checkbox" checked={this.state.isSelected} onChange={this.handleInputChange} />
            </div>
            (<span>{this.state.isSelected ? '是' : '否'}</span>)<br />
          </label>
          <label>
            兴趣爱好:
            <div className="input-wrapper" onChange={this.handleMultipleSelection.bind(this)}>
              <input name="hobby" type="checkbox" value='java' defaultChecked={this.state.hobby.indexOf('java') > -1} />java
              <input name="hobby" type="checkbox" value='js' defaultChecked={this.state.hobby.indexOf('js') > -1} />js
              <input name="hobby" type="checkbox" value='php' defaultChecked={this.state.hobby.indexOf('php') > -1} />php
            </div>
            (<span>{this.state.hobby}</span>)<br />
          </label>

          <h1>非受控组件</h1>
          <label>
            文件：
            <input type="file" ref={this.fileInput} />
          </label>
          <button onClick={this.handleSubmit.bind(this)}>提交表单</button>
        </form>
      </div>
    );
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  }
  handleMultipleSelection(e) {
    const { value, checked, name } = e.target;
    const arr = this.state[name];

    if (!checked) {
      arr.splice(arr.indexOf(value), 1);
    } else {
      arr.push(value)
    }
    this.setState({
      [name]: arr
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.fileInput.current.files[0].name)
  }
}

FormPage.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  description: PropTypes.string
}

export default FormPage;