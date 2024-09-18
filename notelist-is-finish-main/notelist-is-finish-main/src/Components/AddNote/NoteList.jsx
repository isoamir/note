import Note from "./Note";

function NoteList({ notes, onDelete , onDone }) {
  return (
    <div>
      
      { notes == ""  ? <p>your note list is empty</p> : null}
      {notes.map((item) => (
        <Note key={item.id} data={item} onDelete={onDelete} onDone={onDone} />
      ))}
    </div>
  );
}
export default NoteList;
