import mongoose, { Schema, Document, Model } from 'mongoose';


export interface IColor {
    name: string;
    hex: string;
}


export interface IColorDocument extends IColor, Document {}


const ColorSchema = new Schema<IColorDocument>({
    name: { type: String, required: true },
    hex: { type: String, required: true },
});


export const Color: Model<IColorDocument> = mongoose.model<IColorDocument>('Color', ColorSchema);
