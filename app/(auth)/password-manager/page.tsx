"use client";

import PasswordManagerSidebar from "../../components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SearchBar from "./components/search-bar";

const passwordItems = [
  { name: "GitHub", url: "https://github.com", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  { name: "Google", url: "https://google.com", icon: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" },
  { name: "Facebook", url: "https://facebook.com", icon: "https://www.facebook.com/images/fb_icon_325x325.png" },
  { name: "Twitter", url: "https://twitter.com", icon: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.png" },
]

export default function PasswordManager() {
  return (
    <div className="flex h-screen">
      <div>
        <PasswordManagerSidebar />
      </div>

      <div className="flex-1 flex flex-col relative p-6">
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">All password items</h1>
            <p className="text-muted-foreground">Manage all your saved passwords and logins</p>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar />
            <Button>+ New Password</Button>
          </div>
        </div>

        <Separator className="mb-6"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {passwordItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex items-center gap-4">
                <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-md object-cover" />
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground break-all">{item.url}</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">Edit</Button>
                  <Button size="sm" variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
