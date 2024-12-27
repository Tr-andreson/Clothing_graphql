import { useRegisterUserMutation } from "__generated__/graphql"
import { useForm } from "react-hook-form"

export const useRegister = () => {
  const [, registerU] = useRegisterUserMutation()
  const { register, handleSubmit, reset, formState: { isLoading } } = useForm()

  const onSubmit = async (data: any) => {
    const response = await registerU({ body: data })

    if (response.data) {
      alert(response.data.registerUser)
      reset()
    }
  }

  return {
    onSubmit,
    register,
    handleSubmit, isLoading


  }
}
