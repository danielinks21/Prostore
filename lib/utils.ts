// export { cn } from "cn"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "cn"

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

49.90