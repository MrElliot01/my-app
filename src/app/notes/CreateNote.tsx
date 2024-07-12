'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  // This section fetches the DB records after there has been a sumbit so we can see the new note without refreshing
  // instead it is called after the form is submitted
  const create = async(e: React.FormEvent) => {
    e.preventDefault()
    await fetch('http://127.0.0.1:8090/api/collections/notes_db/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent('');
    setTitle('');
    router.refresh();
  }

  // This is the form that is used to create a new note, the id and the create time are done automatically
  // so all that is needed here is the title and the content
  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create note
      </button>
    </form>
  );
}

