import { useAuth } from '../../context/AuthProvider/useAuth';
import ProfileCard from '../fragments/mutable/ProfileCard';

const PanelSection = () => {
  const auth = useAuth();
  return (
    <div className="py-5">
      <ProfileCard
        user={{
          id: auth.id,
          name: auth.name,
          email: auth.email,
          admin: auth.admin,
          created_at: auth.created_at,
        }}
      />
    </div>
  );
};

export default PanelSection;
