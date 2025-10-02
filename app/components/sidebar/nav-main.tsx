"use client"

import { IconMail, type Icon } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { EmojiProvider, Emoji } from "react-apple-emojis"
import EmojiIcons from "react-apple-emojis/src/data.json"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <EmojiProvider data={EmojiIcons}>
              <RainbowButton className="w-60 rounded-xl">
                <Emoji name="sparkles" className="w-5 h-5" />
                <span className="font-semibold">Quick Create</span>
              </RainbowButton>
            </EmojiProvider>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
