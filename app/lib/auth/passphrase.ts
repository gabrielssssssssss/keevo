import { generate } from "random-words";

export function PassPhraseCreate() {
    return (generate(12) as string[]);
}

export async function PassPhraseVerify(passPhrase: string[], hashedPassPhrase: string) {
    try {
        const response = await fetch("/api/hash/verify", {
            method: "POST",
            body: JSON.stringify({"element": passPhrase.join(" "), "hashedElement": hashedPassPhrase})
        });
        const data = await response.json();
        return Boolean(data["isValid"]);
    } catch {
        return false
    }
} 