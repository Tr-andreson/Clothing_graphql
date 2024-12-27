"use client"
import React from 'react'
import { useRegister } from './hooks/useRegister'


const RegiserForm = () => {
  const { handleSubmit, register, isLoading, onSubmit } = useRegister()
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder='Enter Email' />
        <input {...register("password")} placeholder='Enter Password' />
        <input {...register("firstName")} placeholder='Enter First Name' />
        <input {...register("lastName")} placeholder='Enter Last Name' />
        <input {...register("phoneNumber")} placeholder='Enter phoneNumber' />
        {isLoading ? (
          <div>
            <h3>Loading .....</h3>
          </div>
        ) : (
          <button type='submit'>Submit</button>
        )}
      </form>
    </>
  )
}

export default RegiserForm
