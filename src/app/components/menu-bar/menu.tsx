import { Menubar } from "@/components/ui/menubar";
import MainSearch from "@/app/components/inputs/mainSearch";
import Logo from "@/app/components/menu-bar/logo";

export function Menu() {
  return (
    <Menubar className="relative flex justify-between rounded-none border-b px-2 lg:px-4">
      <Logo />
      <MainSearch />
    </Menubar>
  );
}
