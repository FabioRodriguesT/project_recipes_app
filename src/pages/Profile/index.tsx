import { profileIcon } from '../../assets/images';
import Header from '../../components/Header';

function Profile() {
  return (
    <div>
      <Header
        title="Profile"
        icon={ profileIcon }
        searchVisible={ false }
      />
    </div>
  );
}

export default Profile;
