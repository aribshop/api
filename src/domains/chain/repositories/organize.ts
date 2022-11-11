import { delay } from "../../../core/util";
import { IGroupEntity, IGroupModel, INewGroup } from "../types/group";



export async function addUserToGroup(user: string, group: IGroupEntity) {

    await delay(1000);
    // todo add user to group
}

export async function createGroup(group: INewGroup): Promise<IGroupModel> {

    await delay(1000);

    return {
        id: "123",
        site: group.site,
        name: group.name,
        users: [],
        tag: [],
        viewOnly: group.viewOnly,
    }

}