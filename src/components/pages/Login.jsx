import React from 'react';

const Login = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;