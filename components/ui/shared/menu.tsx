import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, UserIcon, EllipsisVertical } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../sheet";

const Menu = () => {
    return ( <div className="flex justify-end gap-3 ">
<nav className="hidden md:flex w-full max-w-xs gap-1">
     <ModeToggle />
                <Button nativeButton={false} variant="ghost" render={<Link href="/cart" className="flex items-center gap-2" />}>
                <ShoppingCart className="size-4" /> Cart
                </Button>
                 <Button nativeButton={false} render={<Link href="/sign-in" className="flex items-center gap-2" />}>
                <UserIcon className="size-4" /> Sign In
                </Button>
</nav>
<nav className="md:hidden">
    <Sheet>
        <SheetTrigger className = 'align-middle'>
        <EllipsisVertical />

        </SheetTrigger>

        <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button nativeButton={false} variant='ghost' render={<Link href="/cart"  className="flex items-center gap-2" />}>
                <ShoppingCart /> Cart
            </Button>

             <Button nativeButton={false} render={<Link href="/sign-in" className="flex items-center gap-2" />}>
                <UserIcon className="size-4" /> Sign In
                </Button>

            <SheetDescription></SheetDescription>
            </SheetContent>
    </Sheet>
</nav>
    </div> );
}
 
export default Menu;