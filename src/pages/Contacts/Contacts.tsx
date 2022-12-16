import { FC } from 'react'
import { Contact } from '../../components/Contact/Contact'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import data from './../../data.json'
import element from './../../styles/Element.module.css'
import cn from 'classnames'
import styles from './Contacts.module.css'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(element.Page, element[theme], styles[theme])}>
      <div className={element.Container}>
        {data.contacts.map((contact, index) => (
          <Contact {...contact} key={index} />
        ))}
      </div>
    </div>
  )
}

export { Contacts }