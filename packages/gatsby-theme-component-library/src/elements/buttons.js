/** @jsx jsx */
import { jsx } from "theme-ui"

export const Button = props => (
  <button
    {...props}
    sx={{
      appearance: "none",
      fontFamily: "inherit",
      fontWeight: "bold",
      fontSize: 0,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      p: 12,
      color: "inherit",
      bg: "muted",
      border: 0,
      "&:focus": {
        outline: "2px solid"
      },
      "&:hover": {
        outline: "2px solid"
      }
    }}
  />
)

export const IconButton = props => (
  <button
    {...props}
    sx={{
      appearance: "none",
      fontFamily: "inherit",
      fontWeight: "bold",
      fontSize: 0,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      p: 12,
      color: "inherit",
      bg: "muted",
      border: 0,
      "&:focus": {
        outline: "2px solid"
      },
      "&:hover": {
        outline: "2px solid"
      }
    }}
  >
    <svg aria-hidden width="32" height="32">
      <path d="M16 18l8-8h-6v-8h-4v8h-6zM23.273 14.727l-2.242 2.242 8.128 3.031-13.158 4.907-13.158-4.907 8.127-3.031-2.242-2.242-8.727 3.273v8l16 6 16-6v-8z" />
    </svg>
  </button>
)
