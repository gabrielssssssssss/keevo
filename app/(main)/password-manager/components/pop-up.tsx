/** app/(auth)/password-manager/components/pop-up.tsx */
"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { passwordHandler } from "@/lib/handler/password-handler";
import { apiSession } from "@/app/utils/api-session";

export default function PopUpSession({
  onClose,
  onSuccess,
  onError
}: {
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
}) {
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;
    const callback = async () => {
      const result = await passwordHandler(password);
      const response = await apiSession.updateSession("POST", { password });
      if (result && response.status == 200) {        
        onSuccess();
        onClose();
      } else {
        onError();
      }
      setSubmit(false);
    };
    callback();
  }, [submit, password, onClose, onSuccess, onError]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <AlertDialog open={true}>
        <AlertDialogContent className="p-6 space-y-4">
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="text-lg font-semibold">
              Enter your password to unlock your session
            </AlertDialogTitle>
            <p className="text-sm">
              If you forgot your password, click on forgot-password to update your master key.
            </p>
            <AlertDialogDescription>
              <Input
                placeholder="Type your master password ..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col space-y-2">
            <AlertDialogAction
              className="w-full cursor-pointer"
              onClick={() => setSubmit(true)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
          <p className="text-xs italic text-gray-500 text-center">
            If you forget your password and passphrase, you will no longer be able to recover your passwords.
          </p>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
