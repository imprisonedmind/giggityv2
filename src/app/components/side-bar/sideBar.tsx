import { SideBarElement } from "@/app/components/side-bar/sideBarElement";
import { IoMdMusicalNote } from "react-icons/io";
import { FaPersonRunning, FaPersonWalking, FaTree } from "react-icons/fa6";
import { MdMovieFilter, MdOutlineSportsGymnastics } from "react-icons/md";
import { IoFish } from "react-icons/io5";
import { GiMountainClimbing, GiRetroController } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { SideBarTitle } from "@/app/components/side-bar/sideBarTitle";
import { SideBarCheckBox } from "@/app/components/side-bar/sideBarCheckBox";
import { Sidebar } from "@/components/ui/sidebar";
import Link from "next/link";

export function SideBar({}) {
  return (
    <Sidebar>
      <div className={"px-2"}>
        <div className="space-y-4 py-4">
          <Link href={"/"}>
            <SideBarTitle title={"Discover"} />
          </Link>
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
    </Sidebar>
  );
}
