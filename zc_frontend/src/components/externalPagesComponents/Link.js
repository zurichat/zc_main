import style from '../../styles/Link.module.css'

const Link = ({ title, to, color, underline }) => {
  return (
    <a
      href={to}
      className={`${style.underline}`}
    >
      {title}
    </a>
  )
}

export default Link
