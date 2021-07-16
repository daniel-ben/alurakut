import React from 'react';
import Box from '../elements/Box';
import ProfileSidebarMenu from '../elements/ProfileSidebarMenu';

function ProfileSidebar(props) {

  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <a className="" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />

      <ProfileSidebarMenu />
    </Box>
  )
}

export default ProfileSidebar;