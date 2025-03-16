import React, { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, Settings, User, Eye, Bell, AlertTriangle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "../../lib/auth";
import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "framer-motion";
import PreviewMode from "../preview/PreviewMode";

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  onLogout?: () => void;
}

const Header = ({
  userName = "John Doe",
  userAvatar = "",
  onLogout = () => {},
}: HeaderProps) => {
  const { user } = useAuth();
  const [showPreview, setShowPreview] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      if (onLogout) onLogout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const displayName = user?.name || userName;
  const avatarUrl =
    user?.photoURL ||
    userAvatar ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${displayName}`;

  return (
    <>
      <motion.header
        className="w-full h-20 bg-[hsl(var(--dark-bg-secondary))] border-b border-[hsl(var(--dark-border-subtle))] flex items-center justify-between px-6 sticky top-0 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="h-10 w-10 bg-[hsl(var(--dark-accent-blue))] rounded-md flex items-center justify-center glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold text-xl">BS</span>
          </motion.div>
          <h1 className="text-xl font-bold gradient-text glow-text">
            Bus Surveillance System
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowPreview(true)}
            className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
          >
            <Eye className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem className="flex items-start gap-2 p-3 cursor-pointer">
                  <div className="bg-orange-500/20 text-orange-500 p-2 rounded-full">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Bus #103 Maintenance Alert</p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                      Scheduled maintenance required in 2 days
                    </p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                      10 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-start gap-2 p-3 cursor-pointer">
                  <div className="bg-blue-500/20 text-blue-500 p-2 rounded-full">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Route A1 Delay</p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                      Downtown Express delayed by 10 minutes
                    </p>
                    <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                      25 minutes ago
                    </p>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-[hsl(var(--dark-accent-blue))]">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full hover:bg-[hsl(var(--dark-bg-primary))]"
              >
                <Avatar className="h-10 w-10 border-2 border-[hsl(var(--dark-accent-blue))]">
                  <AvatarImage src={avatarUrl} alt={displayName} />
                  <AvatarFallback className="bg-[hsl(var(--dark-bg-primary))] text-[hsl(var(--dark-text-primary))]">
                    {displayName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-[hsl(var(--dark-text-primary))]">
                    {displayName}
                  </p>
                  <p className="text-xs leading-none text-[hsl(var(--dark-text-secondary))]">
                    {user?.email || "admin@bussurveillance.com"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))]">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))]">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer hover:bg-[hsl(var(--dark-bg-primary))]"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.header>

      {showPreview && <PreviewMode onClose={() => setShowPreview(false)} />}
    </>
  );
};

export default Header;
