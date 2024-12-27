"use client"

import { useLogin } from './hooks/useLogin'

const LoginForm = () => {
  const { handleSubmit, register, isLoading, onSubmit } = useLogin()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder='Enter Email' />
      <input {...register("password")} placeholder='Enter Password' />
      {isLoading ? (
        <h4>Loading .....</h4>
      ) : (
        <button type='submit'>Submit</button>
      )}
    </form>
  )
}

export default LoginForm
