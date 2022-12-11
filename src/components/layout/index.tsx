import React, { FC } from 'react';
import BackButton from './BackButton';
import { DashboardProps } from './index.type';

const Dashboard: FC<DashboardProps> = ({
  children,
  title = 'Page',
  useBackButton = true,
  useProfileButton = false,
}) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg shadow-md py-5 bg-white relative flex items-center w-full justify-between">
        <div className="px-[86px] w-full flex flex-wrap items-center justify-between">
          {useBackButton && <BackButton title={title} />}
          {useProfileButton && <p>Profile</p>}
        </div>
      </nav>
      <div className="px-[40px] py-[50px] text-[#252A3C]">{children}</div>
    </React.Fragment>
  );
};

export default Dashboard;
