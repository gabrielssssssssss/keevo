"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogCancel
} from "@/components/ui/alert-dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import EmojiIcons from "react-apple-emojis/src/data.json";
import { generatePassword, parseUrl } from "@/lib/utils";
import {IconArrowsShuffle} from "@tabler/icons-react"
import { apiVault } from "@/app/utils/api-vault";
import { PasswordData } from "@/lib/models/vault-models";
import { encryptPassword } from "@/lib/services/auth-services";

export default function AlertNewPassword({
	onClose,
	onSuccess,
	onError
}: {
	onClose: () => void;
	onSuccess: () => void;
	onError: () => void;
}) {
	const [url, setUrl] = useState("");
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [category, setCategory] = useState("");

	const handleContinue = async() => {
		if (!url || !login || !password || !category) {
			onError();
			return;
		}
        const passwordEncrypted = await encryptPassword(password);
        const credential: PasswordData = {
            url: parseUrl(url).url,
            originUrl: parseUrl(url).originUrl,
            login: login,
            password: passwordEncrypted.encrypted,
            iv: passwordEncrypted.iv,
            tag: passwordEncrypted.tag,
            category: category,
            notes: "",
        }
        await apiVault.addVault(undefined, {type: "PASSWORD", data: credential});
		onSuccess();
        onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
			<AlertDialog open={true}>
				<AlertDialogContent className="p-6 space-y-6 max-w-md w-full rounded-xl shadow-lg animate-slide-up">
					<AlertDialogHeader className="space-y-2">
						<AlertDialogTitle className="text-xl font-semibold flex items-center gap-2">
							<EmojiProvider data={EmojiIcons}>
								<Emoji name="locked" className="w-5 h-5" />
							</EmojiProvider>
							Add a Secret Safely
						</AlertDialogTitle>
						<p className="text-sm" >
							Add your new password to the vault. Strong and unique passwords keep your accounts secure.
						</p>
					</AlertDialogHeader>
                        <AlertDialogDescription className="flex flex-col space-y-3">
                            <Input
                                className="text-white"
                                placeholder="URL / Domain"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <Input
                                className="text-white"
                                placeholder="Login / Username"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <div className="flex items-center gap-2">
                                <Input
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="text-white flex-1"
                                />
                                <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        onClick={() => setPassword(generatePassword())}
                                        className="cursor-pointer"
                                    >
                                        <IconArrowsShuffle className="!size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Generate random password</p>
                                </TooltipContent>
                                </Tooltip>
                            </div>
                            <Select defaultValue="general" value={category} onValueChange={setCategory}>
                                <SelectTrigger className="text-white w-[180px]">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">
                                        <EmojiProvider data={EmojiIcons}>
                                            <Emoji name="sparkles" className="w-4 h-4 mr-1" />
                                        </EmojiProvider>
                                        General
                                    </SelectItem>
                                    <SelectItem value="internet">
                                        <EmojiProvider data={EmojiIcons}>
                                            <Emoji name="globe-showing-americas" className="w-4 h-4 mr-1" />
                                        </EmojiProvider>
                                        Internet
                                    </SelectItem>
                                    <SelectItem value="banking">
                                        <EmojiProvider data={EmojiIcons}>
                                            <Emoji name="money-bag" className="w-4 h-4 mr-1" />
                                        </EmojiProvider>
                                        Banking
                                    </SelectItem>
                                    <SelectItem value="work">
                                        <EmojiProvider data={EmojiIcons}>
                                            <Emoji name="briefcase" className="w-4 h-4 mr-1" />
                                        </EmojiProvider>
                                        Work
                                    </SelectItem>
                                    <SelectItem value="system">
                                        <EmojiProvider data={EmojiIcons}>
                                            <Emoji name="locked" className="w-4 h-4 mr-1" />
                                        </EmojiProvider>
                                        System
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </AlertDialogDescription>

					<AlertDialogFooter className="flex flex-col space-y-2 w-full">
						<div className="flex gap-2 w-full">
							<AlertDialogCancel asChild>
								<Button variant="outline" className="flex-1 cursor-pointer" onClick={() => onClose()}>Cancel</Button>
							</AlertDialogCancel>
							<AlertDialogAction asChild>
								<Button className="flex-1 cursor-pointer" onClick={handleContinue}>Add Password</Button>
							</AlertDialogAction>
						</div>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};