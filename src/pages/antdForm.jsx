import React from 'react';
import axios from 'axios';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import './index.scss';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const AutoCompleteOption = AutoComplete.Option;


class AntdForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      carrierList: [],
      cityList: [],
      transportQuotationFormList: [],
      carrierCode: '',
      startPlace: '',
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 12
      },
    };
    const carrierOptions = this.state.carrierList.map(item => <Option key={item.codeKey}>{item.codeValue}</Option> );
    return (
      <div className="antdForm">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormItem {...formItemLayout} label="承运商">
            {getFieldDecorator('carrier', {
              rules: [
                { required: true },
              ],
            })(
              <Select placeholder="请选择" setFieldsValue={this.state.carrierCode}>
                {carrierOptions}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="始发地">
            {getFieldDecorator('startPlace', {
              rules: [
                { required: true },
              ],
            })(
              <Cascader options={this.state.cityList} onChange={this.onCityChange} placeholder="请选择" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="备注名">
            {getFieldDecorator('nameRemark', {
              rules: [
                { required: true },
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="适用的报价形式">
            {getFieldDecorator('transportQuotationForm', {
              rules: [
                { required: true },
              ],
            })(
              <CheckboxGroup options={this.state.transportQuotationFormList} />
            )}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.taregt.value;
    this.setState({
      [name]: value
    });
  }

  onCityChange(value) {
    console.log(value);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  componentDidMount() {
    axios.get('http://mysale.alogcc.com:9002/react-admin/getParamEnum')
      .then(res => {
        let data = res.data;
        if (data.code === '00000') {
          let transportQuotationFormList = data.data.TRANSPORT_QUOTATION_FORM.map(item => {
            item.label = item.codeKey;
            item.value = item.codeValue;
            return item
          })
          this.setState({
            carrierList: data.data.TRANSPORT_CARRIER,
            transportQuotationFormList: transportQuotationFormList
          });
        }
      });
    axios.get('http://mysale.alogcc.com:9002/react-admin/getCity')
      .then(res => {
        let data = res.data;
        if (data.code === '00000') {
          this.setState({
            cityList: data.data
          });
        }
      });
  }
}

const WrappedAntdForm = Form.create()(AntdForm);

export default WrappedAntdForm;