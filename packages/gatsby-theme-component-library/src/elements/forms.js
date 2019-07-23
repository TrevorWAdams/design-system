/** @jsx jsx */
import { jsx } from "theme-ui"

export const Label = props => (
  <label
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
      border: "1px solid black",
      "&:focus": {
        outline: 0,
        borderColor: "#ff3019"
      },
    }}
  />
)