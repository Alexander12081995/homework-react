import {Button, Input, TextArea} from './common';
import css from './app.module.css';
import {initialNotes} from './data/consts';
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {getDate} from "./utils/getDate";

export const App = () => {

    const [notes, setNotes] = useState(initialNotes)
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [editedId, setEditedId] = useState<string | null>(null)
    const [searchInput, setSearchInput] = useState('')

    const addNote = () => {
        if (newTitle.trim() === '') {
            return false
        }
        if (newDescription.trim() === '') {
            return false
        }
        setNotes((prevNotes) => [...notes, {
            id: uuidv4(),
            title: newTitle,
            description: newDescription,
            time: getDate()
        }])
        setNewTitle('')
        setNewDescription('')
    }
    const removeNote = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const onEditStart = (id: string) => {
        setEditedId(id)
        const note = notes.find((note) => note.id === id);
        setNewTitle(note!.title);
        setNewDescription(note!.description);
    }

    const onEditEnd = () => {
        setNotes((prevNotes) => prevNotes.map((note) => note.id === editedId ? {...note, title: newTitle, description: newDescription, time: getDate()} : note))

        setNewTitle('')
        setNewDescription('')
        setEditedId(null)
    }

    const readNote = (id: string) => {
        const note = notes.find((note) => note.id === id);
        setNewTitle(note!.title)
        setNewDescription(note!.description)
    }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes") ?? '[]')
        if (notes.length) {
            setNotes(notes)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    return (
        <div className={css.container}>
            <div className={css.wrapper}>

                <ul className={css.groupNotes}>
                    <Input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={'search'}/>
                    {notes.filter((note) => note.title.includes(searchInput) === true)
                        .map((note) => (
                        <li className={css.note} onClick={() => readNote(note.id)}>
                            <p onClick={onEditEnd}>{note.time}</p>
                            <h2 className={css.title}>{note.title}</h2>
                            <p className={css.title}>{note.description}</p>
                            {editedId !== note.id && <Button children={'edit note'} onClick={() => onEditStart(note.id)}/>}
                            {editedId === note.id && <Button children={'save note'} onClick={onEditEnd}/>}
                            <Button children={'remove note'} onClick={() => removeNote(note.id)}/>
                        </li>
                    ))}
                </ul>

                <div className={css.groupAddNote}>
                    <h2 style={{textAlign: "center"}}>{getDate()}</h2>
                    <div className={css.btnAndInp}>
                        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                        <Button onClick={addNote} children={'add note'}/>
                    </div>
                    <TextArea value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
                </div>
            </div>


        </div>)
}
