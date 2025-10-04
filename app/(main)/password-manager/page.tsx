/** app/(main)/password-manager/page.tsx */
"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import PasswordManagerSidebar from "../../components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SearchBar from "./components/search-bar";
import PopUpSession from "./components/pop-up";
import PasswordList from "./components/password-list";
import useSession from "@/app/hooks/useSession";
import { ToastType } from "@/components/smoothui/ui/BasicToast";
import ToastContainer from "@/app/components/toast";
import AlertNewPassword from "./components/alert-new-password";

export default function PasswordManager() {
  const { showPopUp, setShowPopUp } = useSession();
  const [showAlertNewPassword, setShowAlertNewPassword] = useState(false);
  const [toastState, setToastState] = useState({
    isToastVisible: false,
    toastMessage: "",
    toastType: "success" as ToastType
  });

  const showToast = (type: ToastType, message: string) => {
    setToastState({ isToastVisible: true, toastMessage: message, toastType: type });
    setTimeout(() => setToastState(prev => ({ ...prev, isToastVisible: false })), 3000);
  };

  return (
    <div className="flex h-screen relative">
      {showPopUp && (
        <PopUpSession
          onClose={() => setShowPopUp(false)}
          onSuccess={() => showToast("success", "Successfully logged in")}
          onError={() => showToast("error", "Wrong password")}
        />
      )}
      {showAlertNewPassword && (
        <AlertNewPassword
          onClose={() => setShowAlertNewPassword(false)}
          onSuccess={() => showToast("success", "Your password has been saved !")}
          onError={() => showToast("error", "All fields must be filled in")}
        />
      )}
      {typeof window !== "undefined" &&
        createPortal(
          <ToastContainer
            isToastVisible={toastState.isToastVisible}
            toastMessage={toastState.toastMessage}
            toastType={toastState.toastType}
            setIsToastVisible={(v) =>
              setToastState(prev => ({
                ...prev,
                isToastVisible: typeof v === "function" ? v(prev.isToastVisible) : v
              }))
            }
            setToastMessage={(m) =>
              setToastState(prev => ({
                ...prev,
                toastMessage: typeof m === "function" ? m(prev.toastMessage) : m
              }))
            }
            setToastType={(t) =>
              setToastState(prev => ({
                ...prev,
                toastType: typeof t === "function" ? t(prev.toastType) : t
              }))
            }
          />,
          document.body
        )
      }
      <div className={`flex-1 flex ${showPopUp ? "pointer-events-none filter blur-sm" : ""}`}>
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
                <Button className="cursor-pointer" onClick={() => setShowAlertNewPassword(true)}>
                  + New Password
                </Button>
            </div>
          </div>
          <Separator className="mb-6"/>
          <PasswordList />
        </div>
      </div>
    </div>
  );
}
