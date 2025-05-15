// Third-party Imports
import classnames from 'classnames'

// Type Imports
import { Typography } from '@mui/material'

// Component Imports
import NavToggle from './NavToggle'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center -mr-6 w-full justify-center'>
        <Typography variant='h4'>AIDEX</Typography>
      </div>
      <div>
        <NavToggle />
      </div>
    </div>
  )
}

export default NavbarContent
