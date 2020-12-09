/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

export const onInitialClientRender = () => {
  setTimeout(function() {
      document.getElementById("___loader").style.display = "none"
  }, 1000)
}