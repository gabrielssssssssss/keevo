
export function AuthHandler() {
    const credentials = localStorage.getItem("credentials");
    if (credentials == null) {
        return false
    }
    return true
}

export function PasswordHandler(password:string) {
    console.log(password)
}