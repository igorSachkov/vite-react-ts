import {ActionFunctionArgs, Form, redirect, useActionData} from 'react-router-dom';
import React, {CSSProperties, useEffect, useState} from 'react';
import {IDeniedRequestResult, RequestResult} from '@models/auth-models.ts';
import {Button, TextField} from '@mui/material';


const authFormKeys = {
  login: 'login',
  password: 'password'
};

export const AuthAction = async ({request}: ActionFunctionArgs) => {
  const data: FormData = await request.formData();

  const formData =  {
    name: data.get(authFormKeys.login),
    password: data.get(authFormKeys.password)
  };

  const result: RequestResult = await new Promise((resolve, reject) => {

    // todo обращение к сервису авторизации
    setTimeout(() => {
      const result: RequestResult = {
        isSuccess: true,
      };
      resolve(result);
    }, 1000);
  });

  return result.isSuccess ? redirect('/') : result;
};

const AuthPage = () => {
  const actionData = useActionData() as IDeniedRequestResult;
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const formStyle: CSSProperties = {
    display: 'flex',
    margin: '1rem',
    flexDirection: 'column',
    gap: '1rem'
  };

  useEffect(() => {
    setIsFormDisabled(false);
    console.warn(actionData);
  }, [actionData]);

  return (
    <div style={{width: '100%', height: '100%'}}>
      <h1 style={{textAlign: 'center', margin: '4rem 0'}}>Авторизация</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Form method="post" action="/auth" style={formStyle} onSubmit={() => setIsFormDisabled(true)}>
          <TextField name={authFormKeys.login} id="login" label="Логин" variant="outlined" sx={{display: 'block'}}/>

          <TextField name={authFormKeys.password} id="password" label="Пароль" variant="outlined" sx={{display: 'block'}}/>

          {(actionData && !actionData.isSuccess) && <p>{actionData.errorMessage}</p>}

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="submit" variant="contained" disabled={isFormDisabled}>Отправить</Button>
          </div>

        </Form>
      </div>

    </div>
  );
};

export default AuthPage;
