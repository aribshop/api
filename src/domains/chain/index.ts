import { Router } from 'express'
import addUser from './routes/addUser';
import getLines from './routes/getLines';


const router = Router()

interface Props {

}

export default async function (props: Props) {

    router.get("/lines", await getLines());
    router.post("/user/add", await addUser());
    return router;

}