import { FC, useEffect, useState } from 'react'
import { Contact } from '../../components/Contact/Contact'
import { IContact } from './../../types/Contact.interface'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { APIRequest } from '../../utils/APIRequest'
import element from './../../styles/Element.module.css'
import cn from 'classnames'
import styles from './Contacts.module.css'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  const theme = useSelector(themeSelector)
  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState<IContact[]>([])

  useEffect(() => {
    setLoading(true)
    APIRequest('/contacts')
    .then(data => setContacts(data.contacts))
    .then(() => setLoading(false))
  }, [])

  return (
    <div className={cn(element.Page, element[theme], styles[theme])}>
      <div className={element.Container}>
        {loading && (
          <div className={styles.Loading}>
            loading ...
          </div>
        )}
        {contacts.map((contact, index) => (
          <Contact {...contact} key={index} />
        ))}
      </div>
    </div>
  )
}

export { Contacts }