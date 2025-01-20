import React, {useEffect, useState} from 'react';
import './asset/Login.css'
import {useForm} from "react-hook-form";
import {ApiDomain} from "../../../utils/ApiUtils.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token !== null) {
            navigate(-1)
        }
    }, []);

    const login = (data: any) => {
        // Đảm bảo URL API đúng với backend của bạn
        fetch(ApiDomain + `/login`, {
            method: 'POST', // Phương thức POST
            headers: {
                'Content-Type': 'application/json', // Gửi dữ liệu dưới dạng JSON
            }, body: JSON.stringify({
                username: data.username, password: data.password,
            }), // Chuyển đổi data thành JSON
        })
            .then((res) => res.json())
            .then((responseData) => {
                if (responseData.code === 200) {
                    const token = responseData.data.jwt;
                    localStorage.setItem('token', token);
                    navigate(-1)
                } else {
                    setError("Thông tin đăng nhập không đúng")
                }
            })
            .catch((err) => {
                console.error('Lỗi:', err);
            });
    };
    return (<React.Fragment>
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(login)}>
                <h2 className="form-title">Đăng Nhập</h2>

                <div className="input-group">
                    <label htmlFor="username">Tên đăng nhập</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Nhập tên đăng nhập"
                        {...register('username', {
                            required: 'Vui lòng nhập tên đăng nhập',
                        })}
                    />
                    {errors.username?.message && <span
                        style={{
                            color: 'red', margin: '10px'
                        }}><>{errors.username.message}</></span>}
                </div>


                <div className="input-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        {...register('password', {
                            required: 'Vui lòng nhập mật khẩu',
                        })}
                    />
                    {errors.password?.message && <span
                        style={{
                            color: 'red', margin: '10px'
                        }}><>{errors.password.message}</></span>}
                </div>
                {error !== null ? <p
                    style={{
                        color: 'red',
                    }}>{error}</p> : ''}

                <button type="submit" className="login-button">Đăng nhập</button>
            </form>
        </div>
    </React.Fragment>);
};

export default Login;