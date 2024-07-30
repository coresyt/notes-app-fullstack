'use client'
import { useEffect, useState } from "react"
import { Note } from "~/types"
import { v7 as uuid } from 'uuid'
import clsx from "clsx"

const notesBlob = [
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  },
  {
    id: uuid(),
    name: 'Test application notes',
    content: 'This is a test application notes',
  }
]

export default function Home() {
  const [notes, setNotes] = useState<Array<Note>>([])
  const inputClassBase = 'min-w-auto w-[300px] outline-none border-none rounded-xl bg-san-juan-800 p-2'
  const btnClass = clsx(inputClassBase, 'transition-all duration-[0.3s] hover:bg-san-juan-500')

  useEffect(() => {
    setTimeout(() => {
      setNotes(notesBlob)
    }, 10000)
  }, [])


  return <main className="w-[80%] min-w-[300px] max-w-[400px] p-6 rounded-3xl bg-san-juan-900 flex flex-col gap-1 [&>h1]:text-center">
    <h1 className="text-4xl font-bold mb-3">Notes App</h1>
    <form className="h-40 flex gap-2 items-center justify-center flex-col mb-6">
      <h3 className="text-xl text-san-juan-400 font-semibold">Create Note</h3>
      <input type="text" placeholder="Enter note name" className={inputClassBase} />
      <textarea placeholder="Enter note content" className={clsx(inputClassBase, 'h-[900px] resize-none')} />
      <button type="submit" className={btnClass} onClick={(e) => {
        e.preventDefault()
        alert(e.currentTarget.innerHTML);
      }}>Save</button>
    </form>
    <hr className="border-san-juan-600 border-1 mx-10 my-2.5" />
    <section className="flex flex-col items-center justify-center gap-3">
      <h2 className="text-xl text-san-juan-400 font-semibold">Notes</h2>
      {notes?.length <= 0 ? <div>Notes is void</div> : ''}
      {notes?.map(note => (
        <div key={note.id} id={note.id} className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold">{note.name}</h3>
          <p>{note.content}</p>
          <button className={clsx(btnClass, 'bg-red-600 hover:bg-red-500')} onClick={(e) => {
            e.preventDefault()
            alert('Delete')
          }}>delete</button>
        </div>
      ))}
    </section>
  </main>
}
