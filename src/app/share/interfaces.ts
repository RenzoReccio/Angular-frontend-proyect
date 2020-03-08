export interface IRestaurant {
    id: number;
    name: string;
    tipo: string;
    meals: string[];
    comments: IComments[];
}

export interface IComments {
    restaurantId: number;
    comment: string;
}
