import { ILine } from "../../../core/types/types";
import { delay } from "../../../core/util";


export async function getLines(userId: string): Promise<ILine[]> {

    await delay(1000);

    return [
        {
            id: "1",
            name: "line 1",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
        {
            id: "2",
            name: "line 2",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
        {
            id: "3",
            name: "line 3",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
        {
            id: "4",
            name: "line 4",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
    ];
}



export async function getPublicLines(siteId: string): Promise<ILine[]> {
    await delay(1000);
    // todo get the number of orders in each line
    return [
        {
            id: "1",
            name: "line 1",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
        {
            id: "2",
            name: "line 2",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
        {
            id: "3",
            name: "line 3",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
        {
            id: "4",
            name: "line 4",
            isPublic: true,
            expiresTime: 1500,
            maxOrders: 10,
            groups: [],
            confirmations: [],
        },
    ];
}


