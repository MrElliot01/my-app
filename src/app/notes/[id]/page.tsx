import styles from '../Notes.module.css';

// Gets all the notes from the database
async function getNotes(noteId:string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes_db/records/${noteId}`,
    {
        next: { revalidate: 10},
    }
 );
 const data = await res.json();
 return data
}


// On the singluar note page the note is displayed with it taking up the whole page, using [id] in the folder name we are 
// able to handle multiple variations of elements in a really graceful way
export default async function NotePage({ params }: any) {
    // This retrives the data from the database
    const note = await getNotes(params.id);

    // This displays the singlar note
    return (
        <div>
            <h1>notes{note.id}</h1>
            <div className = {styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    );
}