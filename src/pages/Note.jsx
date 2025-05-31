import { EditorContent, useEditor } from '@tiptap/react'
import Title from '../components/styleComponents/Title'
import React from 'react'
import { useLocation } from 'react-router-dom'
import StarterKit from '@tiptap/starter-kit'

const Note = () => {
    const location = useLocation()
    const data = location.state.data

    const editor = useEditor({
        content: data.notes,
        editable: false,
        extensions: [StarterKit]
    })

    return (
        <div className='p-6'>
            <Title title='React JS' p='Study'/>
            <EditorContent editor={editor}/>
        </div>
    )
}

export default Note