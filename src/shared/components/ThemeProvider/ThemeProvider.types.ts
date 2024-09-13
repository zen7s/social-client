export type ThemeContextType = {
  theme: "dark" | "light"
  toggleTheme: () => void
}

export type ThemeProps = {
  children?: React.ReactNode
}
