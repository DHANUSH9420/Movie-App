import React from 'react'

const UserDetails = React.createContext({
  userEmails: '',
  onEnterUserDetails: () => {},
  activeTab: 'Home',
  onChangeTab: () => {},
})

export default UserDetails
