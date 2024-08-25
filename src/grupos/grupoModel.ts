class GruposModel {
    id: string;
    user_id: string;
    description: string;
    date_created: Date;

    constructor(id: string, user_id:string, description:string, date_created: Date) {
        this.id = id;
        this.user_id = user_id;
        this.description = description;
        this.date_created = date_created;
    }
}

export default GruposModel