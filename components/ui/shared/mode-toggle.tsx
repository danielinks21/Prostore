'use client';
import { useSyncExternalStore } from 'react';
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup,
    DropdownMenuContent,  DropdownMenuSeparator,
    DropdownMenuLabel,DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunMoon, MoonIcon, SunIcon } from "lucide-react";
const ModeToggle = () => {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

    const { theme, setTheme } = useTheme();

    if (!mounted) return null;
    return (<DropdownMenu> 
        <DropdownMenuTrigger asChild>  
            <Button variant ='ghost'>
                {theme === 'system' ? (<SunMoon/>
                ) : theme === 'dark' ? (<MoonIcon/>
                ) : (<SunIcon/>)}

            </Button>
        </DropdownMenuTrigger>
       <DropdownMenuContent>
  <DropdownMenuGroup>
    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
  </DropdownMenuGroup>
  <DropdownMenuSeparator />

  <DropdownMenuCheckboxItem
    checked={theme === "system"}
onCheckedChange={() => setTheme("system")}
  >
    System
  </DropdownMenuCheckboxItem>

  <DropdownMenuCheckboxItem
    checked={theme === "light"}
onCheckedChange={() => setTheme("light")}
  >
    Light
  </DropdownMenuCheckboxItem>

  <DropdownMenuCheckboxItem
    checked={theme === "dark"}
    onCheckedChange={() => setTheme("dark")}
  >
   Dark
  </DropdownMenuCheckboxItem>
</DropdownMenuContent>
    
    </DropdownMenu> )
}
 
export default ModeToggle;