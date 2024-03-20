import React from "react";
interface UserInfoProps {
  repos: number;
  followers: number;
  following: number;
}
export const UserInfo: React.FC<UserInfoProps> = ({
  repos,
  followers,
  following,
}) => {
  return (
    <div className="flex justify-around text-sm  text-center bg-mainLight dark:bg-mainDark p-3 rounded-xl">
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Repos</p>
        <p>{repos}</p>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Followers</p>
        <p>{followers}</p>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Following</p>
        <p>{following}</p>
      </div>

    </div>
  );
};
