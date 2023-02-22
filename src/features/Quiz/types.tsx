// define the interfaces that will be used for the rest of the child components
export interface Question {
    "question/type": string;
    "question/text": string;
    "question/choices": Choice[] | StatementChoice[];
    "xt/id"?: string;
}

export interface Choice {
    text: string;
    trait: string;
    img?: string;
    "xt/id"?: string;
}

export interface StatementChoice {
    "statement/type": string;
    "statement/text": string;
    "statement/trait": string;
    "statement/img": string;
    "xt/id"?: string;
}