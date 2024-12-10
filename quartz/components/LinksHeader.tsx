import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Books/Color/books_color.svg"></img>
            <a href="https://vedantbali.com/Dictionary/Dictionary-Glossary">Dictionary</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/Color/brain_color.svg"></img>
            <a href="https://vedantbali.com/Knowledge/Knowledge-Glossary">Learn</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/refs/heads/main/assets/Movie%20camera/Color/movie_camera_color.svg"></img>
            <a href="https://vedantbali.com/Media-Review/">Reviews</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/refs/heads/main/assets/Open%20file%20folder/Color/open_file_folder_color.svg"></img>
            <a href="https://vedantbali.com/Projects/">Projects</a>
          </span>
                 </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
