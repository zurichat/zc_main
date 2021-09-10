import styles from '../styles/Tooltip.module.css'
import pointy from '../assets/pointy.png'

const Tooltip = ({children}) => {
  return (
    <div role="tooltip" className={styles.toolTip}>
      {children}
      <img src={pointy} alt="" />
    </div>
  )
}

export default Tooltip;