/*[app/hooks/useSession.tsx]*/
"use client";

import { useState, useEffect } from "react";
import { apiSession } from "@/app/utils/api-session";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function PopUpSession() {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function useSession() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const callback = async() => {
      const response = await apiSession.checkHealthz("GET", undefined);
      if (response.status != 200) {
        setShowPopUp(true);
      }
    }
    callback()
  }, []);

  return { showPopUp, setShowPopUp };
}