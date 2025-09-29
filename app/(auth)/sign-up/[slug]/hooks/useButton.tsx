import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface DynamicButtonProps {
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
    submit: boolean;
    submitStatus: boolean;
}

export default function DynamicButton({ setSubmit, submit, submitStatus }: DynamicButtonProps) {
    const callback = () => {
        setSubmit(true)
        setTimeout(() => {
            setSubmit(false)
        }, 500)
    }

    if (submit) {
        return <Button disabled><Loader2Icon className="animate-spin"/>Please wait</Button>
    }

    return (
        <Button className="w-full cursor-pointer" variant="default" disabled={submitStatus} onClick={callback}>
            Next
        </Button>
    )
}
