import { profileIcon, searchIcon } from '../images/old';

function Header() {
  return (
    <div>
      <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
      <img src={ searchIcon } alt="Search Icon" data-testid="search-top-btn" />
      <h1 data-testid="page-title">Header</h1>
    </div>
  );
}

export default Header;
