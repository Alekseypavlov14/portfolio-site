import { FC } from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import styles from './Link.module.css'
import cn from 'classnames'

interface LinkProps {
  to: string
  children?: string
  className?: string
}

const Link: FC<LinkProps> = ({
  children,
  className,
  to
}) => {
  const theme = useSelector(themeSelector)

  return (
    <a 
      className={cn(styles.Link, className, styles[theme])}
      href={to}
      target='_blank'
      rel='noreferrer'
    >
      {children || to}
    </a>
  )
}

export { Link }