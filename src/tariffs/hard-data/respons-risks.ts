import { Tariff_Type } from "enums/tariff_type";

export const responseRisksByTariffType: { [k in Tariff_Type]: { [key: string]: string | number }[] } = {
    [Tariff_Type.Economic]: [
        { "name": "medical treatment", "currency": "EUR", "amount": 30000 },
        { "name": "dental treatment", "currency": "EUR", "amount": 300 },
        { "name": "accident", "currency": "EUR", "amount": 3000 },
    ],
    [Tariff_Type.Basic]: [
        { "name": "medical treatment", "currency": "EUR", "amount": 30000 },
        { "name": "dental treatment", "currency": "EUR", "amount": 300 },
        { "name": "accident", "currency": "EUR", "amount": 3000 },
        { "name": "baggage lose", "currency": "EUR", "amount": 450 },
        { "name": "documents lose", "currency": "EUR", "amount": 450 },
    ],
    [Tariff_Type.ActiveTourism]: [
        { "name": "medical treatment", "currency": "EUR", "amount": 30000 },
        { "name": "dental treatment", "currency": "EUR", "amount": 300 },
        { "name": "accident", "currency": "EUR", "amount": 3000 },
        { "name": "baggage lose", "currency": "EUR", "amount": 450 },
        { "name": "documents lose", "currency": "EUR", "amount": 450 },
        { "name": "civic responsibility", "currency": "EUR", "amount": 9000 },
    ],
}