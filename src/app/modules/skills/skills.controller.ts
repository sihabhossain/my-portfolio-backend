import { Request, Response } from 'express';
import Skill from './skills.model';

// Create a new skill
export const createSkill = async (req: Request, res: Response) => {
  try {
    const newSkill = new Skill(req.body);
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (err) {
    res.status(500).json({ message: 'Error creating skill', error: err });
  }
};

// Get all skills
export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching skills', error: err });
  }
};

// Get a skill by ID
export const getSkillById = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching skill', error: err });
  }
};

// Update a skill
export const updateSkill = async (req: Request, res: Response) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(updatedSkill);
  } catch (err) {
    res.status(500).json({ message: 'Error updating skill', error: err });
  }
};

// Delete a skill
export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting skill', error: err });
  }
};
