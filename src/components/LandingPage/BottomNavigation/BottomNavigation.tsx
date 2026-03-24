import '../BottomNavigation/BottomNavigation.css'
import type { NavigationItem } from '../../../pages/LandingPage/types'
import { IconCompass, IconHeart, IconInbox, IconProfile, IconTag } from '../icons'

type BottomNavigationProps = {
  activeItem: NavigationItem
  onChange: (item: NavigationItem) => void
}

const navItems = [
  { value: 'search', label: 'Search', icon: IconCompass },
  { value: 'saved', label: 'Saved', icon: IconHeart },
  { value: 'sell', label: 'Sell', icon: IconTag },
  { value: 'inbox', label: 'Inbox', icon: IconInbox },
  { value: 'profile', label: 'Profile', icon: IconProfile },
] satisfies Array<{
  value: NavigationItem
  label: string
  icon: () => React.JSX.Element
}>

export function BottomNavigation({ activeItem, onChange }: BottomNavigationProps) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {navItems.map((item) => {
        const isActive = item.value === activeItem
        const Icon = item.icon

        return (
          <button
            key={item.value}
            type="button"
            className={`bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`.trim()}
            onClick={() => onChange(item.value)}
          >
            <Icon />
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}