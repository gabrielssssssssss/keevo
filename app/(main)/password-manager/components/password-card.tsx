"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Briefcase, Building2, User, Lock, Unlock, Eye, EyeOff, FileText, Calendar, X, Edit2, Trash2, Copy } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

type PasswordCardProps = {
  id: string
  url: string
  originUrl: string
  login: string
  password: string
  iv: string
  tag: string
  notes: string
  category: string
  createdAt: string
  updatedAt: string
  onDelete?: (id: string) => void
  onEdit?: (data: PasswordCardProps) => void
}

export default function PasswordCard(props: PasswordCardProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const getCategoryColor = (category: string): string => {
    const colorMap: Record<string, string> = {
      social: "bg-purple-500/30 border-purple-500/30 text-purple-100",
      working: "bg-blue-500/30 border-blue-500/30 text-blue-100",
      banking: "bg-green-500/30 border-green-500/30 text-green-100",
      shopping: "bg-orange-500/30 border-orange-500/30 text-orange-100",
      entertainment: "bg-pink-500/30 border-pink-500/30 text-pink-100",
    }
    return colorMap[category.toLowerCase()] || "bg-gray-500/30 border-gray-500/30 text-gray-100"
  }

  const getIcon = (originUrl: string) => {
    if (originUrl.toLowerCase().includes("bank")) return <Building2 className="w-4 h-4" />
    if (originUrl.toLowerCase().includes("work") || originUrl.toLowerCase().includes("project"))
      return <Briefcase className="w-4 h-4" />
    return <Globe className="w-4 h-4" />
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const CardContent = () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-7 h-7 flex items-center justify-center bg-blue-500/20 dark:bg-blue-500/30 rounded-lg backdrop-blur-sm flex-shrink-0">
            {getIcon(props.originUrl)}
          </div>
          <span className="text-foreground text-sm font-semibold truncate cursor-pointer" onClick={() => copyToClipboard(props.originUrl)}>
            {props.originUrl}
          </span>
        </div>
        <Badge
          variant="secondary"
          className={`${getCategoryColor(props.category)} backdrop-blur-sm shadow-lg text-xs py-0.5 px-2 flex-shrink-0`}
        >
          {props.category}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div
          className="flex items-center gap-2 p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 cursor-pointer"
          onClick={() => copyToClipboard(props.login)}
        >
          <User className="w-3.5 h-3.5 flex-shrink-0 text-foreground/70" />
          <span className="font-medium text-foreground text-xs truncate">{props.login}</span>
          <Copy className="w-3 h-3 ml-1 text-foreground/50" />
        </div>

        <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10">
          {showPassword ? (
            <Unlock className="w-3.5 h-3.5 flex-shrink-0 text-foreground/70" />
          ) : (
            <Lock className="w-3.5 h-3.5 flex-shrink-0 text-foreground/70" />
          )}
          <span
            className="font-mono flex-1 text-foreground text-xs truncate cursor-pointer"
            onClick={() => copyToClipboard(props.password)}
          >
            {showPassword ? props.password : "••••••••"}
          </span>
          <Button
            size="icon"
            variant="ghost"
            className="h-5 w-5 hover:bg-white/20 dark:hover:bg-white/10 flex-shrink-0 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          </Button>
        </div>
      </div>

      {props.notes && (
        <div className="flex items-start gap-2 p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10">
          <FileText className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-foreground/70" />
          <span className="italic text-muted-foreground text-xs">{props.notes}</span>
        </div>
      )}

      <div className="flex justify-between text-[10px] text-muted-foreground pt-1 border-t border-white/10 dark:border-white/5">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>Created: {new Date(props.createdAt).toLocaleDateString("en-US")}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>Updated: {new Date(props.updatedAt).toLocaleDateString("en-US")}</span>
        </div>
      </div>
    </div>
  )

  const handleDelete = () => {
    if (props.onDelete) props.onDelete(props.id)
    setOpenModal(false)
  }

  const handleEdit = () => {
    if (props.onEdit) props.onEdit(props)
    setOpenModal(false)
  }

  return (
    <>
      <Card className="relative w-full max-w-3xl backdrop-blur-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 dark:from-zinc-900/50 dark:via-zinc-900/40 dark:to-zinc-900/30 border border-white/30 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl hover:border-white/40 dark:hover:border-white/20 overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <CardContent />
          <Button
            size="sm"
            variant="outline"
            className="w-full mt-2 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            View More
          </Button>
        </div>
      </Card>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader className="flex justify-between items-center">
            <DialogTitle>Password Details</DialogTitle>
          </DialogHeader>

          <CardContent />

          <div className="flex gap-2 mt-4">
            <Button
              variant="destructive"
              className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4" /> Delete
            </Button>
            <Button
              variant="secondary"
              className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleEdit}
            >
              <Edit2 className="w-4 h-4" /> Edit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
