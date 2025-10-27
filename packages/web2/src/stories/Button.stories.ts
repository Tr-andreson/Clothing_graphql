import type { Meta, StoryObj } from "@storybook/react"
import { userEvent, within, expect } from "@storybook/test"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"], // Enables automatic docs generation
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click me",
    onClick: () => console.log("Button clicked"),
  },
}
export default meta
type Story = StoryObj<typeof Button>

// ✅ Base story template
export const Default: Story = {
  args: { variant: "default" },
}

export const Destructive: Story = {
  args: { variant: "destructive" },
}

export const Outline: Story = {
  args: { variant: "outline", size: "sm" },
}

export const Secondary: Story = {
  args: { variant: "secondary" },
}

export const Ghost: Story = {
  args: { variant: "ghost" },
}

export const Link: Story = {
  args: { variant: "link" },
}

// ✅ Example with interactive test
export const ClickTest: Story = {
  args: { children: "Test me" },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole("button")

    await step("Click the button and check interaction", async () => {
      await userEvent.click(button)
      expect(button).toBeInTheDocument()
    })
  },
}
