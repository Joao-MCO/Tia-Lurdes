export const Section = {
    MASSAS: "Massas",
    CONGELADOS: "Congelados",
    PIZZAS: "Pizzas",
} as const;
export type Section = (typeof Section)[keyof typeof Section];

export const Measure = {
    KG: "kg",
    G: "g",
    UN: "un",
} as const;
export type Measure = (typeof Measure)[keyof typeof Measure];

export const Role = {
    ADMIN: "Admin",
    VENDEDOR: "Vendedor",
    CLIENTE: "Cliente",
} as const;
export type Role = (typeof Role)[keyof typeof Role];