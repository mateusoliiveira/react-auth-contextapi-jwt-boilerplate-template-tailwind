import { useAuth } from '../../../context/AuthProvider/useAuth';
import { CardData } from '../../../interfaces/CardData';
import { formatDate, hideData, hideEmail } from '../../../libs/utils';

const ProfileCard = ({ user }: CardData): any => {
  const auth = useAuth();
  return (
    auth.id && (
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              {hideData(user.name)}
            </h2>
            <p className="leading-relaxed text-base">{hideEmail(user.email)}</p>
            <p className="leading-relaxed text-base">
              {`conta criada há ${formatDate(new Date(user.created_at))}`}
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              {user.admin ? 'administrador' : 'usuário'}
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileCard;
