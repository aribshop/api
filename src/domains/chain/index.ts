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


const router = Router()

interface Props {
    auth: string
}

export default async function (props: Props) {

    // lines
    router.get("/lines", await getLines());
    router.get("/lines/public", await publicLines());

    // add user to group
    router.post("/user/add", await addUser());

    // create tag and add it to groups
    router.post("/tag/create", await createTag());
    router.post("/tag/add", await addTag());

    // create new group and add it to line
    router.post("/group/create", await createGroup());
    router.post("/group/add", await addGroup());

    //orders
    router.get("/orders", await getOrders());
    router.post("/orders/move", await moveOrder());





    return router;

}