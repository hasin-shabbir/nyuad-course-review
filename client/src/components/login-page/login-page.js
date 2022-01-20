import React, {useEffect, useState} from "react";

import LoginForm from "../login-form/login-form";
import LogoHeader from "../logo-header/logo-header";

const LoginPage = (props) => {
    return (
        <div>
            <LogoHeader />
            <LoginForm />
        </div>
    );
}

export default LoginPage;