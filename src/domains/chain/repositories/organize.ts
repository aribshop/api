import { delay } from "../../../core/util";
import { ILineModel } from "../types/chain";
import { IGroupEntity, IGroupModel, INewGroup } from "../types/group";
import { ITagModel, INewTag } from "../types/tag";



export async function addUserToGroup(user: string, group: IGroupEntity) {

    await delay(1000);
}



export async function addTagToGroup(tag: string, group: IGroupEntity) {

    await delay(1000);
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

export async function createTag(tag: INewTag): Promise<ITagModel> {

    await delay(1000);

    return {
        id: "123",
        name: tag.name,
    }

}


export async function addGroupToLine(lineId: string, group: IGroupEntity): Promise<ILineModel> {

    await delay(1000);

    return {
        id: lineId,
        name: "line 1",
        isPublic: true,
        expiresTime: 1500,
        maxOrders: 10,
        groups: [group.id],
        confirmations: [],
        site: "123",
    }

}