"use client"

import * as React from "react"
import {
  IconAlertHexagonOff,
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconEyeBitcoin,
  IconEyeBolt,
  IconEyeCheck,
  IconEyeQuestion,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconKeyOff,
  IconListDetails,
  IconMoodNerd,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "General",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Internet",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Banking",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Working",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "System",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Password Generator",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Password Tester",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Login Breached",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export  default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
	<SidebarProvider>
		<Sidebar collapsible="offcanvas" {...props}>
		<SidebarHeader>
			<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton
				asChild
				className="data-[slot=sidebar-menu-button]:!p-1.5"
				>
				<a href="#">
					<IconEyeBolt className="!size-5" />
					<span className="text-base font-semibold">Keevo Inc.</span>
				</a>
				</SidebarMenuButton>
			</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
		<SidebarContent>
			<NavMain items={data.navMain} />
			<NavDocuments items={data.documents}/>
			<NavSecondary items={data.navSecondary} className="mt-auto" />
		</SidebarContent>
		<SidebarFooter>
			<NavUser user={data.user} />
		</SidebarFooter>
		</Sidebar>
	</SidebarProvider>
  )
}
