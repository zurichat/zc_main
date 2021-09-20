import React from 'react'
import styles from '../styles/pricingTable.module.css'
import { ReactComponent as Tick } from '../assets/goodTick.svg'

export default function TableRow({
  head,
  free,
  pro,
  business,
  enterprise,
  isLabel
}) {
  return (
    <tr className={styles.tableRow}>
      <th className={!isLabel ? styles.label : ''}>{head}</th>
      <td>{free === 'thick' ? <Tick /> : free}</td>
      <td>{pro === 'thick' ? <Tick /> : pro}</td>
      <td>{business === 'thick' ? <Tick /> : business}</td>
      <td>{enterprise === 'thick' ? <Tick /> : enterprise}</td>
    </tr>
  )
}
