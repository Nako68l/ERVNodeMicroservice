import { Request, Response, NextFunction } from "express";
import { AMADEUS_URL } from "../environment";
import { TARIFFS, Tariff_Info } from "./hard-data/tariffs-list"
import { COUNTRIES } from "./hard-data/countries"
import { Risks } from "../enums/risks";
import { Travel_Purpose } from "../enums/travel_purpose";
import Axios from "axios"
import { Tariff_Type } from "../enums/tariff_type";

interface Tourism_Tariffs_Request_Body {
    residence_start_date: string,
    residence_end_date: string,
    persons_birthdays: Array<string>,
    risks: Array<Risks>,
    country_name: string,
    travel_purpose: Travel_Purpose
}

async function getTourismTariffs(req: Request, res: Response, next: NextFunction) {
    const reqBody: Tourism_Tariffs_Request_Body = req.body
    let tariffType: Tariff_Type

    if (reqBody.risks && reqBody.risks.length > 0) {
        tariffType = Tariff_Type.Basic

        if (!isAllowedRisks(reqBody.risks)) {
            return res.json(null)
        }
    } else {
        tariffType = Tariff_Type.Economic
    }
    if (reqBody.travel_purpose == Travel_Purpose.Sport) {
        tariffType = Tariff_Type.ActiveTourism
    }

    const country = findCountry(reqBody.country_name);
    if (!country) return noSuchCountryError(res);

    const tariff = getTariff(country.region, tariffType);
    if (tariff) {
        console.log(tariff.name)
        const tariffs = await calculateAmadeusTariff(req.body, AMADEUS_URL(`packet/${tariff.external_code}/calculate`));
        res.json(tariffs);
    } else {
        console.error('THERE IS NO SUCH TARIFF IN TARIFF LIST. CHECK TARIFF LIST, REGION NAME AND TARIFF TYPE ENUM \n at tariffs.controller')
        res.status(500).send('No suitable tariff, check beck-end validation that allowed this happen')
    }
};

const calculateAmadeusTariff = async (params: Tourism_Tariffs_Request_Body, url: string) => {
    let body: { [k: string]: any } = {
        "date_from": params.residence_start_date,
        "date_till": params.residence_end_date,
    }
    params.persons_birthdays.forEach((birthday, i) => body[`persons[${i + 1}][birthday]`] = birthday)
    console.log(body)
    const { data } = await Axios.post(url, body)
    return data;
}

const isAllowedRisks = (risks: Array<Risks>) => risks.every(risk => risk == Risks.DocumentsLose || risk == Risks.BaggageLose)
const findCountry = (countryName: string) => {
    return COUNTRIES.find(country => {
        return country.name.trim().toLocaleLowerCase() === countryName.trim().toLocaleLowerCase()
    })
}

const getTariff = (countryRegion: string, tariffType: Tariff_Type): Tariff_Info | undefined => {
    return TARIFFS.find(tariff => {
        return tariff.name.includes(countryRegion) && tariff.name.includes(tariffType)
    })
}

const noSuchCountryError = (res: Response) => {
    res
        .status(400)
        .json(`
            "errors": [
                {
                    "field": "password",
                    "location": "body",
                    "messages": [
                        "the value of password is not allowed to be empty",
                        "the value of password must match the regular expression /[a-zA-Z0-9]{3,30}/"
                    ],
                    "types": ["any.empty", "string.regex.base"]
                }
            ]
        `)
}

export { getTourismTariffs }