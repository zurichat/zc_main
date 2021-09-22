import style from '../component-styles/Link.module.css'

const Link = ({ title, to, color, underline }) => {
  return (
    <a href={to} className={`${style.a}`}>
      {title}
    </a>
  )
}

export default Link
