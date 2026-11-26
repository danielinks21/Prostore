// export { cn } from "cn"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "cn"
import { ZodError } from "zod"

export function cn(...inputs: ClassValue[]) {

    return twMerge(clsx(inputs));
}

// convert prisma obj into a regular js object

export function convertToPlainObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places 

export function formatNumber(num: number, ): string {
   const [int,decimal] = num.toString().split('.').toString().split('.');
return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

export function formatError(error: unknown): string {
    if (error instanceof ZodError) {
        return error.issues
            .map(({ path, message }) => `${path.join(".")}: ${message}`)
            .join(". ");
    }

    if (
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        error.name === "PrismaClientKnownRequestError"
    ) {
        if ("code" in error && error.code === "P2002") {
            return "A record with this value already exists.";
        }

        return "A database error occurred. Please try again.";
    }

    if (error instanceof Error) {
        return error.message;
    }

    return "An unexpected error occurred.";
}