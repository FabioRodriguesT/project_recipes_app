import { profileIcon } from '../../assets/images';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Profile() {
  return (
    <div>
      <Header
        title="Profile"
        icon={ profileIcon }
        searchVisible={ false }
      />
      <Footer />
    </div>
  );
}

export default Profile;
