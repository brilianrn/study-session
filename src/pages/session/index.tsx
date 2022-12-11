import React from 'react';
import { IconEye } from '../../assets/images';
import { ButtonOutline } from '../../components/buttons';
import Dashboard from '../../components/layout';
import Tab from '../../components/tab';
import { Menu } from '../../components/tab/index.type';
import TableDragDrop from '../../components/table';

const Menus: Menu[] = [
  {
    title: 'Curricullum',
    active: true,
  },
];

const Session = () => {
  return (
    <React.Fragment>
      <Dashboard title="Event" useBackButton>
        <div className="bg-white relative flex items-center w-full justify-between">
          <div className="flex">
            <p className="flex my-auto text-[32px]">
              Belajar dan praktek cinematic videography
            </p>
            <p className="flex my-auto ml-5 text-[12px] text-[#8189A2]">
              Last edited 18 October 2021 | 13:23
            </p>
          </div>
          <ButtonOutline
            title="Preview"
            type="primary"
            icon={IconEye}
            iconPosition="left"
          />
        </div>
        <div className="bg-white mt-[38px]">
          <Tab menus={Menus} />
          <div className="w-full mt-[46px] border border-[#DFE5EE] rounded-lg p-4">
            <p className="text-[16px]">
              Event Schedule: 24 Oktober 2021, 16:30
            </p>
          </div>
          <TableDragDrop />
        </div>
      </Dashboard>
    </React.Fragment>
  );
};

export default Session;
