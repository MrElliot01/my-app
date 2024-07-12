// import PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';


// Gets the notes from the database with 30 notes per page
async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes_db/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

// Allows the page to refresh each time a new note is added
export default async function NotesPage() {
  const notes = await getNotes();

  // This displays the notes we have
  return(
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

// Each note is made up of an ID, a title, the content and time of creation
function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    // This displays the singular note
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}