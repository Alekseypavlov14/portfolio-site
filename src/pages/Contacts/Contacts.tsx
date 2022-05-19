import { FC } from 'react'
import { Contact } from '../../components/Contact/Contact'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './Contacts.module.css'
import contacts from './../../data/contacts.json'
import cn from 'classnames'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Contacts, styles[theme])}>
      <div className={styles.ContactsContainer}>
        {contacts.map((contact, index) => (
          <Contact {...contact} key={index} />
        ))}
      </div>
    </div>
  )
}

export { Contacts }