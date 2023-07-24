export interface Question {
    "question/type": string;
    "question/text": string;
    "question/choices": | Choice[] | StatementChoice[];
    "xt/id"?: string;
}

export interface Choice {
    text: string;
    traits: string[];
    img?: string;
}

export interface StatementChoice {
    "statement/type": string;
    "statement/text": string;
    "statement/traits": string[];
    "statement/img": string;
    "xt/id": string;
}