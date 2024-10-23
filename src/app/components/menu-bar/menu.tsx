import MainSearch from "@/app/components/inputs/mainSearch";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Menu() {
  return (
    <header
      className={cn(
        "flex h-16 px-4 shrink-0 items-center justify-between gap-2",
        "transition-[width,height] ease-linear",
        "group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b"
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
      </div>
      <MainSearch />
    </header>
  );
}
