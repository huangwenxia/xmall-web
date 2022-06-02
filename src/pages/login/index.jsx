import './index.scss'
import { Form,Input,Button,Toast ,NavBar} from 'antd-mobile'
import {useState} from "react";
import Api from "@/api"
import { useNavigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate()
    const [telephone, setTelephone] = useState('13260669138')
    const [password, setPassword] = useState('123456')
    const getUserInfo = () => {
        Api.system.user.info().then((res) => {
            Storage.set("userInfo", res)
            navigate("/")
        }).catch(()=>{
            Toast.show({
                icon: 'fail',
                content: '获取用户信息失败',
            })
        })
    }
    const onFinish = (values) => {
        Toast.show({
            icon: 'loading',
            content: '登录中…',
        })
        Api.system.user.login(values).then((res) => {
            Storage.set("token", res)
            getUserInfo()
        }).catch(()=>{
            Toast.show({
                icon: 'fail',
                content: '登录失败',
            })
        })
    }
    const back = () =>
        Toast.show({
            content: '点击了返回区域',
            duration: 1000,
        })
    return (<div className="login-wrapper">
        <NavBar onBack={back}>登录</NavBar>
        <div className="login-main">
            <h2>欢迎回来！</h2>
            <Form onFinish={onFinish}
                  footer={
                      <Button block shape='rounded' type='submit' color='danger' size='large'>
                          登录
                      </Button>
                  }
            >
                <Form.Item
                    name="telephone"
                    label="手机号码"
                    rules={[{ required: true, message: '手机号码不能为空' }]}
                >
                    <Input placeholder='请输入手机号码' />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[{ required: true, message: '密码不能为空' }]}
                >
                    <Input placeholder='请输入密码' />
                </Form.Item>

            </Form>

        </div>

    </div>)
}
export default Login
