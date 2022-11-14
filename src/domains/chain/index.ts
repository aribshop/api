import { Router } from 'express'

import addGroup from './routes/addGroup';
import addTag from './routes/addTag';
import addUser from './routes/addUser';
import createGroup from './routes/createGroup';
import createTag from './routes/createTag';
import getLines from './routes/getLines';
import publicLines from './routes/publicLines';
import getOrders from './routes/getOders';
import moveOrder from './routes/moveOrder';
import { jwt } from '../..';


const router = Router()

interface Props {
    auth: string
}




export default async function (props: Props) {

    // lines
    router.get("/lines", jwt, await getLines());
    router.get("/lines/public", await publicLines());

    // add user to group
    router.post("/user/add", jwt, await addUser());

    // create tag and add it to groups
    router.post("/tag/create", jwt, await createTag());
    router.post("/tag/add", jwt, await addTag());

    // create new group and add it to line
    router.post("/group/create", jwt, await createGroup());
    router.post("/group/add", jwt, await addGroup());

    //orders
    router.post("/orders/move", jwt, await moveOrder());
    router.use("/orders", jwt, await getOrders());



    router.use(handleError);

    return router;
}

function handleError(err: any, req: any, res: any, next: (err?: any) => void) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send("invalid token...");
    } else {
        next(err);
    }
}