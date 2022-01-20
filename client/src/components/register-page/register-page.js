import React, {useEffect, useState} from "react";

import LogoHeader from "../logo-header/logo-header";
import RegisterForm from "../register-form/register-form";

const RegisterPage = (props) => {
    return (
        <div>
            <LogoHeader />
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;