import { AppolProvider } from "./apollo-provider"

export const Provider = ({ children }: any) => {
  return (
    <AppolProvider>
      {children}
    </AppolProvider>
  )
}
