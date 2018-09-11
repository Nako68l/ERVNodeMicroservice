import { Request, Response, NextFunction } from "express";
import { AMADEUS_URL } from "../environment";
import { TARIFFS } from "./hard-data/tariffs-list"
import COUNTRIES from "./hard-data/countries"
import { Risks } from "@enums/risks";
import { Travel_Purpose } from "../enums/travel_purpose";
import Axios from "axios"

interface Tourism_Tariffs_Request_Body {
    residence_start_date: string,
    residence_end_date: string,
    persons_birthdays: Array<string>,
    risks: Array<Risks>,
    country_name: string,
    travel_purpose: Travel_Purpose
}

async function getTourismTariffs(req: Request, res: Response, next: NextFunction) {
    const tariffParams = req.body

    let externalCode

    const tariffs = await calculateAmadeusTariff(req.body, AMADEUS_URL(`packet/${externalCode}/calculate`));

    res.json(tariffs);
};

const calculateAmadeusTariff = async (params: Tourism_Tariffs_Request_Body, url: string) => {
    const { data } = await Axios.post(
        url,
        {
            "title": params.residence_end_date,
            "body": params.residence_start_date,
        }
    )
    return data;
}

export { getTourismTariffs }