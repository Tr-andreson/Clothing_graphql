import { useLoginUserMutation } from "../../../__generated__/graphql"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export const useLogin = () => {
  const [, login] = useLoginUserMutation()
  const router = useRouter()

  const { handleSubmit, register, formState: { isLoading } } = useForm()

  /**
   * Handles user login functionality.
   * 
   * This function is triggered on form submission. It sends the login data 
   * to the server and processes the response. If the login is successful, 
   * it displays a success message and redirects the user to the homepage.
   * 
   * @param  data - The form data submitted by the user.
   * @returns  - A promise that resolves when the function completes.
   */
  const onSubmit = async (data: any) => {
    const response = await login({ body: data })

    if (response.data) {
      alert(response.data?.loginUser)
      router.push("/")
    }
  }

  return {
    handleSubmit,
    register,
    isLoading,
    onSubmit

  }
}
