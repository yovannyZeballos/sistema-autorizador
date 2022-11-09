export interface productsType{
    id: number;
    title?: string;
    img?: string;
    starText?: number;
    review?: string;
    lastValue?: string;
    newValue?: string;
    bageText?: string;
    textStatus: string;
    children : img[];
}

interface img {
    img: string;
}
