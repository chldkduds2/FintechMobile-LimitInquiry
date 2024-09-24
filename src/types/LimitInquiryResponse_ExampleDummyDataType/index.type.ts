export interface Bank {
    id: number
    name: string
    bankLogoUrl: string
    backgroundBankLogo: string
    bankDivisionCode: string
    bankIntroduction: string
    displayOrder: number
    isUnderInspection: boolean
}

export interface LoanCondition {
    id: number
    bankManagementNo: string
    loanLimit?: number // 한도
    loanRate?: number // 금리
    interestType?: string
    loanReliabilityGrade: string
}

export interface Product {
    id: number
    bank: Bank
    name: string
    productCode: string
    category: string
    displayOrder: number
    majorCategory: string
    minorCategory: string
    requiredOpenAccount: boolean
    redemptionFeeYn: boolean
    tags: Array<{ type: string; text: string }>
}

export interface LoanApply {
    id: number
    insertTime: number
    product: Product
    condition: LoanCondition
    status: string
}

export interface LimitInquiryResponse {
    loanApplies: LoanApply[]
}
