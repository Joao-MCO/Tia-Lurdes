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

export const ContactType = {
    PARCERIA:"Parceria",
    COMPRA:"Compra",
    OUTROS:"Outros"
} as const;
export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export const DocType ={
    CPF:"CPF",
    CNPJ:"CNPJ"
} as const;
export type DocType = (typeof DocType)[keyof typeof DocType];