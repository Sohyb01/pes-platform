import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import PESLogo from "./PESLogo";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Link 1",
    href: "#",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem a vero!",
  },
  {
    title: "Link 2",
    href: "#",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem a vero!",
  },
  {
    title: "Link 3",
    href: "#",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem a vero!",
  },
  {
    title: "Link 4",
    href: "#",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem a vero!",
  },
  {
    title: "Link 5",
    href: "#",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem a vero!",
  },
  {
    title: "Link 6",
    href: "#",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem a vero!",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-subtle font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-subtle leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const WebsiteNavbar = () => {
  return (
    <nav className="nav">
      <div className="nav-internal">
        {/* Logo */}
        <PESLogo />
        {/* Links */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dropdown</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <ListItem href="#" title="Location">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, nam voluptatum! Ipsam?
                  </ListItem>
                  <ListItem href="#" title="Location">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, nam voluptatum! Ipsam?
                  </ListItem>
                  <ListItem href="#" title="Location">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, nam voluptatum! Ipsam?
                  </ListItem>
                  <ListItem href="#" title="Location">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, nam voluptatum! Ipsam?
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dropdown</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* CTA and Menu Button */}
        <div className="hidden lg:flex items-center gap-2 w-fit">
          <Button variant={"outline"}>Platform</Button>
          <Button variant={"default"}>Free Session</Button>
        </div>
        {/* Sheet */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <AlignJustify size={16} className="stroke-foreground" />
          </SheetTrigger>
          <SheetContent className="lg:hidden w-full">
            <NavigationMenu className="w-full max-w-[100%] items-start flex flex-col">
              <NavigationMenuList className="flex-col items-start w-full">
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full">
                    <ul className="grid gap-3 p-6 w-full lg:grid-cols-[1fr_1fr]">
                      <ListItem href="#" title="Location">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, nam voluptatum! Ipsam?
                      </ListItem>
                      <ListItem href="#" title="Location">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, nam voluptatum! Ipsam?
                      </ListItem>
                      <ListItem href="#" title="Location">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, nam voluptatum! Ipsam?
                      </ListItem>
                      <ListItem href="#" title="Location">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, nam voluptatum! Ipsam?
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger>
                    Conditions we treat
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full">
                    <ul className="grid gap-3 p-4 md:grid-cols-2 w-full ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="max-w-[100%]">
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default WebsiteNavbar;
