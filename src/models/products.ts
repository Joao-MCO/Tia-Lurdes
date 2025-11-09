import type { Measure, Section } from "./enums"

export type IProductRaw = {
    name: string,
    code: string,
    section: Section,
    weight: number,
    measure: Measure,
    imageUrl?: string
}