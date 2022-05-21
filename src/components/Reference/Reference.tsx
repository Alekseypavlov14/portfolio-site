import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './Reference.module.css'
import cn from 'classnames'

interface ReferenceProps {
  to: string
  children?: string
  className?: string
}

const Reference: FC<ReferenceProps> = ({
  children,
  className,
  to
}) => {
  const theme = useSelector(themeSelector)

  return (
    <a 
      className={cn(styles.Reference, className, styles[theme])}
      href={to}
      target='_blank'
      rel='noreferrer'
    >
      {children || to}
    </a>
  )
}

export { Reference }