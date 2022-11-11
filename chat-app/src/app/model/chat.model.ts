export interface IChat {
    message: string;
    timestamp: string;
    chatRoom: string;
    screenName: string;
}

export interface IChatModel {
    chat: IChat[];
}


