import Note from "../model/Note.js";
export const getAllNotes = async (req, res) => {
  try {
    const note = await Note.find().sort({ createdAt: -1 });
    if (!note) {
      return res.status(400).json({ message: "No note found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log(`Error in getAllNote Controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const findNote = await Note.findById(id);
    if (!findNote) {
      return res.status(404).json({ message: "No note found" });
    }
    res.status(200).json(findNote);
  } catch (error) {
    console.log(`Error in getNote Controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    if (!title || !content) {
      return res.status(400).json({ message: "Enter Title and Content" });
    }
    const saveNote = await newNote.save();
    res.status(201).json({ message: "Note Created Successfully", saveNote });
  } catch (error) {
    console.log(`Error in createNote Controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updateNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );

    if (!updateNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updateNote);
  } catch (error) {
    console.log(`Error in updateNote Controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.log(`Error in deleteNote Controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
