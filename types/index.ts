import {z} from "zod";
import { insertProductSchema } from "@/lib/vaildators";
export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
};