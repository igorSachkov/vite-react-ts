import {ActionFunctionArgs, Form, redirect, useActionData} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {IDeniedRequestResult, RequestResult} from '@models/auth-models.ts';
import {TextField} from '@mui/material';


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

  useEffect(() => {
    setIsFormDisabled(false);
    console.warn(actionData);
  }, [actionData]);

  return (
    <div style={{width: '100%', height: '100%'}}>
      <h1 style={{textAlign: 'center', margin: '4rem 0'}}>Авторизация</h1>
      <Form method="post" action="/auth" style={{margin: '1rem'}} onSubmit={() => setIsFormDisabled(true)}>
        <TextField name={authFormKeys.login} id="login" label="Логин" variant="outlined" sx={{display: 'block'}}/>

        <TextField name={authFormKeys.password} id="password" label="Пароль" variant="outlined" sx={{display: 'block'}}/>

        {(actionData && !actionData.isSuccess) && <p>{actionData.errorMessage}</p>}


        <button type="submit" disabled={isFormDisabled}>Send</button>
      </Form>
    </div>
  );
};

export default AuthPage;
