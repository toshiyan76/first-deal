"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, RocketIcon, FileText } from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    title: "特徴",
    href: "#features",
  },
  {
    title: "利用の流れ",
    href: "#process",
  },
  {
    title: "導入事例",
    href: "#case-study",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container relative mx-auto min-h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-900">
            FirstDeal
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    <Button variant="ghost">{item.title}</Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            variant="ghost"
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            資料ダウンロード
          </Button>

          <Button className="bg-red-600 hover:bg-red-700">
            <RocketIcon className="mr-2 h-4 w-4" />
            7日間無料で試す
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white border-t shadow-lg"
          >
            <div className="container mx-auto py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
              <div className="px-4 pt-4 border-t space-y-4">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <RocketIcon className="mr-2 h-4 w-4" />
                  7日間無料で試す
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  資料ダウンロード
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}