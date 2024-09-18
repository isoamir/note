import { useState } from "react";

function AddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [des, setdes] = useState("");
  const submitH = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      des,
      id: Date.now(),
      createdTime: new Date().toISOString(),
    };

    onAddNote(newNote);

    setTitle("");
    setdes("");
  };

  return (
    <div className="body">
      <div className="main">
        <h1 className="h1">Add your notes</h1>
        <div className="contents">
          <form action="" onSubmit={submitH}>
          <label
              htmlFor="description"
              className="block1"
            >
              Titel
            </label>
            <input
              className="title"
              type="text"
              placeholder=" Enter Your Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label
              htmlFor="description"
              className="block"
            >
              Description
            </label>
            <input
              className="des"
              type="text"
              placeholder=" Enter Your Description"
              onChange={(e) => setdes(e.target.value)}
              value={des}
            />
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="notes">
        
      </div>
    </div>
  );
}

export default AddNote;
