interface Host {
    name: string;
    picture: string;
}

interface Item {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: Host;
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}

export default Item;