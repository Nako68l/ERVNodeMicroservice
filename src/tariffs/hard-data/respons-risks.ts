import { Tariff_Type } from "enums/tariff_type";

export const responseRisksByTariffType: { [key in keyof typeof Tariff_Type]: { [key: string]: string | number }[] } = {
    Economic: [
        { "name": "medical treatment", "currency": "EUR", "amount": 30000 },
        { "name": "dental treatment", "currency": "EUR", "amount": 300 },
        { "name": "accident", "currency": "EUR", "amount": 3000 },
    ],
    Basic: [
        { "name": "medical treatment", "currency": "EUR", "amount": 30000 },
        { "name": "dental treatment", "currency": "EUR", "amount": 300 },
        { "name": "accident", "currency": "EUR", "amount": 3000 },
        { "name": "baggage lose", "currency": "EUR", "amount": 450 },
        { "name": "documents lose", "currency": "EUR", "amount": 450 },
    ],
    ActiveTourism: [
        { "name": "medical treatment", "currency": "EUR", "amount": 30000 },
        { "name": "dental treatment", "currency": "EUR", "amount": 300 },
        { "name": "accident", "currency": "EUR", "amount": 3000 },
        { "name": "baggage lose", "currency": "EUR", "amount": 450 },
        { "name": "documents lose", "currency": "EUR", "amount": 450 },
        { "name": "civic responsibility", "currency": "EUR", "amount": 9000 },
    ],
}
