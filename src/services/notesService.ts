import axios from "axios";
import { NOTES_API_URL } from "../constants/api";
import INote from "../interfaces/note.interface";

export const getNotes = async () => {
  try {
    const response = await axios.get(NOTES_API_URL);
    return response.data.notes;
  } catch (error) {
    console.error(error);
  }
};

export const createNewNote = async (newNoteData: Partial<INote>) => {
  try {
    const response = await axios.post(NOTES_API_URL, newNoteData);
    return response.data.note;
  } catch (error) {
    console.error(error);
  }
};

export const deleteNoteById = async (noteToDeleteId: string) => {
  try {
    const DELETE_API_URL = `${NOTES_API_URL}/${noteToDeleteId}`;
    console.log(DELETE_API_URL);
    const response = await axios.delete(DELETE_API_URL);
    return response.data.note;
  } catch (error) {
    console.error(error);
  }
};

export const updateNoteById = async (
  updateNoteData: Partial<INote>,
  noteId: string
) => {
  try {
    const UPDATE_API_URL = `${NOTES_API_URL}/${noteId}`;
    console.log(UPDATE_API_URL);
    const response = await axios.put(UPDATE_API_URL, updateNoteData);
    return response.data.note;
  } catch (error) {
    console.error(error);
  }
};
