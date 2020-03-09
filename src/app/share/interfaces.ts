export interface IRestaurant {
    id: number;
    name: string;
    tipo: string;
}

export interface IComments {
    restaurantId: number;
    comment: string;
}
