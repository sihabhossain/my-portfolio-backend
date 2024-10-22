import { Request, Response } from 'express';
import Experience from './experience.model';

// Create a new experience
export const createExperience = async (req: Request, res: Response) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(500).json({ message: 'Error creating experience', error: err });
  }
};

// Get all experiences
export const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching experiences', error: err });
  }
};

// Get an experience by ID
export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching experience', error: err });
  }
};

// Update an experience
export const updateExperience = async (req: Request, res: Response) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(200).json(updatedExperience);
  } catch (err) {
    res.status(500).json({ message: 'Error updating experience', error: err });
  }
};

// Delete an experience
export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(200).json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting experience', error: err });
  }
};
