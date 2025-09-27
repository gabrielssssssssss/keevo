import { generate } from "random-words";
import { hashValue, verifyValue } from "@/lib/services/auth-services";
import { addSeedHash } from "@/actions/seedPhrase-actions";

export async function generateSeedPhrase() {
    return generate(12) as string[];
};

export async function hashEachWords(seedPhrase: string[]) {
    const response = seedPhrase.map(async word => await hashValue(word, ""));
    return await Promise.all(response) as string[];
};

export async function addNewPassPhrase(hashSeedPhrase: string[]) {
    for (const [index, element] of hashSeedPhrase.entries()) {
        const response = await addSeedHash(element);
        if (!response) return false;
    };
    return true;
}


export async function verifyHashEachWords(seedPhrase: string[], hashSeedPhrase: string[]) {
    for (let i = 0; i < seedPhrase.length; i++) {
        const response = await verifyValue(hashSeedPhrase[i], seedPhrase[i]);
        if (!response) return false;
    };
    return true;
};