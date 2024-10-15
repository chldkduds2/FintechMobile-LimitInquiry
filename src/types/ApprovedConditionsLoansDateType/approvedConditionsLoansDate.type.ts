export interface LoansBank {
    id: number;
    name: string;
    bankLogoUrl: string;
    backgroundBankLogo: string;
    bankDivisionCode: string;
    bankIntroduction: string;
    displayOrder: number;
    isUnderInspection: boolean;
}

export interface LoansCondition {
    id: number;
    bankManagementNo: string;
    loanLimit?: number; // 한도
    loanRate?: number; // 금리
    interestType?: string;
    loanReliabilityGrade: string;
}

export interface LoansProduct {
    id: number;
    bank: LoansBank;
    name: string;
    productCode: string;
    category: string;
    displayOrder: number;
    majorCategory: string;
    minorCategory: string;
    requiredOpenAccount: boolean;
    redemptionFeeYn: boolean;
    tags: Array<{ type: string; text: string }>;
}

export interface LoansApply {
    id: number;
    insertTime: number;
    product: LoansProduct;
    condition: LoansCondition;
    status: string;
}
