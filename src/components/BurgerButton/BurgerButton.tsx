import { FC } from 'react'
import { isMenuOpened, toggle } from '../../features/burger/burgerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { themeSelector } from '../../features/theme/themeSlice'
import cn from 'classnames'
import styles from './BurgerButton.module.css'

interface BurgerButtonProps {}

const BurgerButton: FC<BurgerButtonProps> = () => {
  const dispatch = useDispatch()

  const theme = useSelector(themeSelector)
  const isOpened = useSelector(isMenuOpened)

  return (
    <div 
      className={cn(
        styles.BurgerButton, 
        styles[theme], 
        isOpened && styles.Clicked
      )}
      onClick={() => dispatch(toggle())}
    >
      <span />
    </div>
  )
}

export { BurgerButton }