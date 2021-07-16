import ProfileSidebarMenu from "../elements/ProfileSidebarMenu";

function HeaderProfileSidebar({ githubUser }) {
  return (
    <div className="HeaderProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <ProfileSidebarMenu />
      </div>
    </div>
  )
}

export default HeaderProfileSidebar