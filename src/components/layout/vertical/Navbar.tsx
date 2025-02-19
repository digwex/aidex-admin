'use client'

// Component Imports
import LayoutNavbar from '@layouts/components/vertical/Navbar'
import NavbarContent from './NavbarContent'
import useVerticalNav from '@/@menu/hooks/useVerticalNav'

const Navbar = () => {
  const { isBreakpointReached } = useVerticalNav()

  if (!isBreakpointReached) return null

  return (
    <LayoutNavbar>
      <NavbarContent />
    </LayoutNavbar>
  )
}

export default Navbar
