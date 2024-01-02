import React from 'react'
import "./Header.scss"
import { Menu as MenuIcon, Person as PersonIcon} from '@mui/icons-material'

export default function Header() {
  return (
    <div className="header">
      <div className="headerItems">
          <div className="mainMenu">
            <MenuIcon />
            <span> Menu </span>
          </div>
          <div className="title">
            <span>Journalr</span>
          </div>
          <div className="userMenu">
            <PersonIcon />
          </div>
        
        
      </div>
    </div>
  )
}
