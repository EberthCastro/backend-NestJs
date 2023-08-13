import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"


@Schema({
    timestamps: true
})


export class Project {
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    title: string;

    @Prop({
        trim: true
    })
    description: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop({
        default: false
    })
    done: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)