import { Request, Response, NextFunction } from "express";
import { AxiosInstance } from "axios"

const axios: AxiosInstance = require('axios');

async function getTourismTariffs(req: Request, res: Response, next: NextFunction) {
    const tariffs = await getErvTariffs(req.body, 'https://jsonplaceholder.typicode.com/posts');
    res.json(tariffs);
};

const getErvTariffs = async (params, url) => {
    const { data } = await axios.post(
        url,
        {
            "title": params.title,
            "body": params.body,
        }
    )
    return data;
}

export { getTourismTariffs }