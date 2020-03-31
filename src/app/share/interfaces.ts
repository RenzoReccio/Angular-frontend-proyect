export interface IRestaurant {
    _id: string;
    name: string;
    type: string;
    _v : string;
}

export interface IComments {
    _id : string,
    restaurantId: number;
    username : string;
    content: string;
    _v : string
}
