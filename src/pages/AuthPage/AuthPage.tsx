import {ActionFunctionArgs, Form, redirect, useActionData} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {IDeniedRequestResult, RequestResult} from '@models/auth-models.ts';


const authFormKeys = {
  name: 'name',
  password: 'password'
};

export const AuthAction = async ({request}: ActionFunctionArgs) => {
  const data: FormData = await request.formData();

  const formData =  {
    name: data.get(authFormKeys.name),
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
        <label htmlFor={authFormKeys.name}>Name</label>
        <input style={{width: '100%'}} name={authFormKeys.name} type="text" disabled={isFormDisabled}/>

        <hr/>

        <label htmlFor={authFormKeys.password}>Password</label>
        <input style={{width: '100%', marginBottom: '1rem'}} name={authFormKeys.password} type="text" disabled={isFormDisabled}/>

        {(actionData && !actionData.isSuccess) && <p>{actionData.errorMessage}</p>}


        <button type="submit" disabled={isFormDisabled}>Send</button>
      </Form>
    </div>
  );
};

export default AuthPage;
