import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import { IContact } from '../../types/Contact.interface'
import styles from './Contact.module.css'
import cn from 'classnames'

interface ContactProps extends IContact {}

const Contact: FC<ContactProps> = ({
  media,
  contact,
  reference
}) => {
  const theme = useSelector(themeSelector)

  return (
    <div className={cn(styles.Contact, styles[theme])}>
      <div className={styles.Media}>
        {media}
      </div>
      <div className={styles.ContactText}>
        <a
          href={reference}
          className={styles.Reference}
          target='_blank'
          rel='noreferrer'
        >
          {contact}
        </a>
      </div>
    </div>
  )
}

export { Contact }