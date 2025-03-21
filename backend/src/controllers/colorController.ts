import { Request, Response } from "express";
import { Color, IColorDocument } from "../models/Color";


export const getColors = async (req: Request, res: Response): Promise<void> => {
    try {
        const colors = await Color.find();
        res.json(colors);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const createColor = async (req: Request, res: Response): Promise<void> => {
    const { name, hex } = req.body;

    if (!name || !hex) {
        res.status(400).json({ message: "Name and hex are required" });
        return;
    }

    try {
        const newColor = new Color({ name, hex });
        await newColor.save();
        res.status(201).json(newColor);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const updateColor = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, hex } = req.body;

    try {
        const existingColor: IColorDocument | null = await Color.findById(id);

        if (!existingColor) {
            res.status(404).json({ message: "Color not found" });
            return;
        }

        existingColor.name = name || existingColor.name;
        existingColor.hex = hex || existingColor.hex;

        await existingColor.save();
        res.json(existingColor);
    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteColor = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedColor = await Color.findByIdAndDelete(id);

        if (!deletedColor) {
            res.status(404).json({ message: "Color not found" });
            return;
        }

        res.json({ message: "Color deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};