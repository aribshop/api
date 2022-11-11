import { Router } from 'express'
import addTag from './routes/addTag';
import addUser from './routes/addUser';
import createTag from './routes/createTag';
import getLines from './routes/getLines';


const router = Router()

interface Props {
    auth: string
}

export default async function (props: Props) {

    router.get("/lines", await getLines());

    // add user to group
    router.post("/user/add", await addUser());

    // create tag and add it to groups
    router.post("/tag/create", await createTag());
    router.post("/tag/add", await addTag());

    // create new group
    router.post("/group/create", await createTag());

    return router;

}