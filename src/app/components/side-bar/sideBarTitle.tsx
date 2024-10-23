import { FC } from "react";

interface SideBarTitleProps {
  title: string;
}

export const SideBarTitle: FC<SideBarTitleProps> = ({ title }) => {
  return (
    <h2 className="px-4 text-lg font-semibold tracking-tight text-sidebar-primary">
      {title}
    </h2>
  );
};
