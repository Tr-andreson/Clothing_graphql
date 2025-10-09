export const Wait = async (time: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("working")

    }, time | 4000)
  })


}
