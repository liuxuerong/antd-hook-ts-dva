import React, {Component} from 'react';
import { stringify } from 'querystring';
import {Button} from 'antd';
import './App.css';
import axios from 'axios'

class App extends Component {
  get(){
    axios(
      {
        url: '/api/client/web/token',  //请求路径（接口）
              method: 'POST', //请求方式
              headers: { 'content-type': 'application/x-www-form-urlencoded' ,
            
              'Authorization':'Basic YXBwOjEyMzQ1Ng=='}, // 请求头，发送FormData格式的数据，必须是 这种请求头。
              data: stringify({
                username: 13975732473,
                password: '810d2e7ad63ce8400dc7ddd4db34e3ce',
                grant_type: 'password'
              })
      }
    ).then(res=>{
      console.log(res);
    })
  }
  render () {
    return (
      <div className="App">
        <Button type="primary" onClick={this.get}>Button</Button>
      </div>
    );
  }
}

export default App;
