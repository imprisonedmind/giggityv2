import { cn } from "@/lib/utils";
import { SideBarElement } from "@/app/components/side-bar/sideBarElement";
import { IoMdMusicalNote } from "react-icons/io";
import { FaPersonRunning, FaPersonWalking, FaTree } from "react-icons/fa6";
import { MdMovieFilter, MdOutlineSportsGymnastics } from "react-icons/md";
import { IoFish } from "react-icons/io5";
import { GiMountainClimbing, GiRetroController } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { SideBarTitle } from "@/app/components/side-bar/sideBarTitle";
import { SideBarCheckBox } from "@/app/components/side-bar/sideBarCheckBox";

export function SideBar({}) {
  return (
    <div className={cn("pb-12 border-r max-w-[180px] w-1/6 h-[96svh]")}>
      <div className="space-y-4 py-4">
        <SideBarTitle title={"Discover"} />
        <div className="space-y-1">
          <SideBarElement logo={<IoMdMusicalNote />} title={"Music"} />
          <SideBarElement logo={<FaTree />} title={"Nature"} />
          <SideBarElement logo={<MdMovieFilter />} title={"Entertainment"} />
          <SideBarElement logo={<FaPersonWalking />} title={"Hiking"} />
          <SideBarElement logo={<FaPersonRunning />} title={"Running"} />
          <SideBarElement
            logo={<MdOutlineSportsGymnastics />}
            title={"Sport"}
          />
          <SideBarElement logo={<IoFish />} title={"Fishing"} />
          <SideBarElement logo={<GiRetroController />} title={"Gaming"} />
          <SideBarElement logo={<GiMountainClimbing />} title={"Climbing"} />
          <SideBarElement logo={<FaPaintBrush />} title={"Art"} />
        </div>
      </div>

      <div className="space-y-4 py-4">
        <SideBarTitle title={"Location"} />
        <div className="space-y-1">
          <SideBarCheckBox title={"Cape Town"} />
          <SideBarCheckBox title={"Durban"} />
          <SideBarCheckBox title={"Johannesburg"} />
          <SideBarCheckBox title={"Sandton"} />
        </div>
      </div>
    </div>
  );
}
