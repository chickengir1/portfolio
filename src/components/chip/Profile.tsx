import { PROFILE } from "../../utils/profileConstans";

const ProfileItem = ({ item }: { item: (typeof PROFILE)[number] }) => {
  const { id, value, icon, url } = item;

  const Content = (
    <>
      <div className={`${ICON_STYLE} ${url ? HOVER_EFFECT : ""}`}>{icon}</div>
      <div>
        <div className="font-bold text-lg text-white">{id}</div>
        <div className="text-sm text-gray-300">{value}</div>
      </div>
    </>
  );

  return url ? (
    <a href={url} target="_blank" className={CARD_STYLE}>
      {Content}
    </a>
  ) : (
    <div className={CARD_STYLE}>{Content}</div>
  );
};

const Profile = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-center mb-12 font-bold text-4xl text-gray-300">
        ABOUT ME
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROFILE.map((item) => (
          <ProfileItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Profile;

const CARD_STYLE =
  "p-4 flex items-center space-x-4 bg-[#3A3A3A] border border-[#555] rounded-lg";
const ICON_STYLE = "flex items-center justify-center text-4xl text-[#ccc]";
const HOVER_EFFECT =
  "transition-transform hover:text-[#00ADB5] hover:scale-105";
