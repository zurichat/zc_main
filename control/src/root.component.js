import styles from './styles.module.css'

export default function Root(props) {
  return (
    <section className={`${styles.test}`}>{props.name} is mounted!</section>
  )
}
