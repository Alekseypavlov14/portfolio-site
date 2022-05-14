import { FC } from 'react'
import styles from './Contacts.module.css'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = (props) => {
  return (
    <div className={styles.Contacts}>
      Contacts Page
    </div>
  )
}

export { Contacts }