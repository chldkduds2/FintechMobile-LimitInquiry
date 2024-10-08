export interface LoansBank {
    id: string;
    name: string;
    bankLogoUrl: string;
    backgroundBankLogo: string;
    bankDivisionCode: string;
    bankIntroduction: string;
    displayOrder: number;
    isUnderInspection: boolean;
}

export interface LoansCondition {
    id: string;
    bankManagementNo: string;
    loanLimit?: number; // 한도
    loanRate?: number; // 금리
    interestType?: string;
    loanReliabilityGrade: string;
}

export interface LoansProduct {
    id: string;
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
    id: string;
    insertTime: number;
    product: LoansProduct;
    condition: LoansCondition;
    status: string;
}
