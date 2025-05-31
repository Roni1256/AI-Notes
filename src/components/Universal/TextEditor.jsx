import "./styles.scss";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underlines from "@tiptap/extension-underline"
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link"
import Subscript from '@tiptap/extension-subscript'
import Superscript  from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align"
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Heading from '@tiptap/extension-heading'
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  X,
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  CodeSquare,
  Quote,
  Minus,
  Undo,
  Redo,
  Palette,
  Underline,
  Highlighter,
  Link2,
  Code2,
  SubscriptIcon,
  SuperscriptIcon,
  AlignLeft,
  AlignJustify,
  AlignCenter,
  AlignRight,
  Table2,
  Heading1Icon,
  ArrowLeftToLine,
  ArrowRightToLine,
  ChartColumnDecreasing,
  ArrowUpToLine,
  ArrowDownToLine,
  Rows,
  Combine,
  Split,
  TableProperties,
  TableRowsSplit,
  TableCellsSplit,
  
} from "lucide-react";

import { useCallback, useState } from "react";

// const MenuBar = () => {
//   const { editor } = useCurrentEditor()

//   if (!editor) {
//     return null
//   }

//   return (
//     <div className="bg-white border-b border-gray-200 p-2 sticky top-0">
//       <div className="flex items-center gap-1 flex-wrap">
//         <button
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           disabled={
//             !editor.can()
//               .chain()
//               .focus()
//               .toggleBold()
//               .run()
//           }
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
//         >
//           <Bold size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           disabled={
//             !editor.can()
//               .chain()
//               .focus()
//               .toggleItalic()
//               .run()
//           }
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
//         >
//           <Italic size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           disabled={
//             !editor.can()
//               .chain()
//               .focus()
//               .toggleStrike()
//               .run()
//           }
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('strike') ? 'bg-gray-200' : ''}`}
//         >
//           <Strikethrough size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCode().run()}
//           disabled={
//             !editor.can()
//               .chain()
//               .focus()
//               .toggleCode()
//               .run()
//           }
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('code') ? 'bg-gray-200' : ''}`}
//         >
//           <Code size={18}/>
//         </button>
//         <div className="w-px h-6 bg-gray-200 mx-1"/>
//         <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="p-2 rounded hover:bg-gray-100">
//           <X size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().setParagraph().run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('paragraph') ? 'bg-gray-200' : ''}`}
//         >
//           <Pilcrow size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
//         >
//           <Heading1 size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
//         >
//           <Heading2 size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
//         >
//           <Heading3 size={18}/>
//         </button>
//         <div className="w-px h-6 bg-gray-200 mx-1"/>
//         <button
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
//         >
//           <List size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
//         >
//           <ListOrdered size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('codeBlock') ? 'bg-gray-200' : ''}`}
//         >
//           <CodeSquare size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('blockquote') ? 'bg-gray-200' : ''}`}
//         >
//           <Quote size={18}/>
//         </button>
//         <div className="w-px h-6 bg-gray-200 mx-1"/>
//         <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="p-2 rounded hover:bg-gray-100">
//           <Minus size={18}/>
//         </button>
//         <button onClick={() => editor.chain().focus().setHardBreak().run()} className="p-2 rounded hover:bg-gray-100">
//           Break
//         </button>
//         <div className="w-px h-6 bg-gray-200 mx-1"/>
//         <button
//           onClick={() => editor.chain().focus().undo().run()}
//           disabled={
//             !editor.can()
//               .chain()
//               .focus()
//               .undo()
//               .run()
//           }
//           className="p-2 rounded hover:bg-gray-100"
//         >
//           <Undo size={18}/>
//         </button>
//         <button
//           onClick={() => editor.chain().focus().redo().run()}
//           disabled={
//             !editor.can()
//               .chain()
//               .focus()
//               .redo()
//               .run()
//           }
//           className="p-2 rounded hover:bg-gray-100"
//         >
//           <Redo size={18}/>
//         </button>
//         <div className="w-px h-6 bg-gray-200 mx-1"/>
//         <button
//           onClick={() => editor.chain().focus().setColor('#958DF1').run()}
//           className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('textStyle', { color: '#958DF1' }) ? 'bg-gray-200' : ''}`}
//         >
//           <Palette size={18}/>
//         </button>
//       </div>
//     </div>
//   )
// }

const MenuBar = () => {
  const { editor } = useCurrentEditor();
  const {isTable,setTable}=useState(true)
  const Dividor=()=>{return<div className="bg-gray-300 rounded-full w-0.5 h-7" />}

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    try {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url })
        .run()
    } catch (e) {
      alert(e.message)
    }
  }, [editor])

  if (!editor) {
    return null;
  }
  const btnStyle =
    "hover:bg-neutral-900  bg-white hover:text-white transition-all ease-in-out duration-300 rounded-lg p-1 cursor-pointer text-neutral-800";
    const btnActive =
    "bg-neutral-900 transition-all ease-in-out duration-300 rounded-lg p-1 cursor-pointer text-white";
  return (
    <>
    <div className="w-full border-b-2 border-gray-300">
      <div className=" rounded-lg flex items-center  gap-2">
        {/* Undo - Redo */}
        <div className="flex items-center justify-center gap-1  p-2  ">
          <button 
          className={btnStyle}
          onClick={()=>{editor.chain().focus().undo().run()}}
          title="Undo"
          >
            <Undo size={20} />

          </button>
          <button 
          className={btnStyle}
          onClick={()=>{editor.chain().focus().redo().run()}}
          title="redo"

          >
            <Redo size={20} />
          </button>
        </div>
        <Dividor/>
        {/* Text Size */}
        <div className="flex items-center justify-center gap-1 p-2">
          <select 
            className={btnStyle}
            onChange={(e) => {
              const value = e.target.value
              if (value === 'paragraph') {
                editor.chain().focus().setParagraph().run()
              } else {
                editor.chain().focus().setHeading({ level: parseInt(value) }).run()
              }
            }}
            value={
              editor.isActive('heading', { level: 1 })
                ? '1'
                : editor.isActive('heading', { level: 2 })
                ? '2'
                : editor.isActive('heading', { level: 3 })
                ? '3'
                : 'paragraph'
            }
          >
            <option value="paragraph">Paragraph</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>          
        </div>        
        <Dividor/>
        {/* Text-Style */}
        <div className="flex items-center justify-center gap-1 p-2">
          <button 
          className={editor.isActive("bold")?btnActive:btnStyle}
          onClick={()=>{editor.chain().focus().toggleBold().run()}}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          title="Bold"

          >
            <Bold size={20} />
          </button>
          <button 
          className={editor.isActive("italic")?btnActive:btnStyle}
          onClick={()=>{editor.chain().focus().toggleItalic().run()}}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          title="Italic"

          >
            <Italic size={20} />
          </button>
          <button 
          className={editor.isActive("underline")?btnActive:btnStyle}
          onClick={()=>{editor.chain().focus().toggleUnderline().run()}}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          title="Underline"

          >
            <Underline size={20} />

          </button>
          <button
          className={editor.isActive("strike")?btnActive:btnStyle}
          onClick={()=>{editor.chain().focus().toggleStrike().run()}}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          title="Strike-Through"

          >
            <Strikethrough size={20} />
          </button>
          <button 
            className={editor.isActive("highlight")?btnActive:btnStyle}
            onClick={()=>{editor.chain().focus().toggleHighlight({color:""}).run()}}
            disabled={!editor.can().chain().focus().toggleHighlight().run()}
            title="Hightlight"
          >
            <Highlighter size={20} className=" stroke-orange-400" />
          </button>
          <button 
            className={editor.isActive("link")?btnActive:btnStyle}
            onClick={setLink}
            disabled={!editor.isActive('link')}
            title="Link"
          >
            <Link2 size={20} />
          </button>
          <button 
            className={editor.isActive("code")?btnActive:btnStyle}
            onClick={()=>{editor.chain().focus().toggleCode().run()}}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            title="code"
          >
            <Code2 size={20} />
          </button>
        </div>
        <Dividor/>
        {/* Sub and super script */}
        <div className="flex items-center justify-center gap-1 p-2">
          <button 
            className={editor.isActive("subscript")?btnActive:btnStyle}
            onClick={()=>{editor.chain().focus().toggleSubscript().run()}}
            disabled={!editor.can().chain().focus().toggleSubscript().run()}
            title="Subscript"
          >
            <SubscriptIcon size={20} />
          </button>
          <button 
            className={editor.isActive("superscript")?btnActive:btnStyle}
            onClick={()=>{editor.chain().focus().toggleSuperscript().run()}}
            disabled={!editor.can().chain().focus().toggleSuperscript().run()}
            title="superscript"
          >
            <SuperscriptIcon size={20} />
          </button>
        </div>
        <Dividor/>
        {/* Text-Alignment */}
        <div className="flex items-center justify-center gap-1 p-2">
          <button 
            className={editor.isActive({textAlign:"left"})?btnActive:btnStyle}
            onClick={()=>{editor.chain().focus().setTextAlign('left').run()}}
            title="Align Left"
          >
            <AlignLeft size={20} />
          </button>
          <button 
           className={editor.isActive({textAlign:"center"})?btnActive:btnStyle}
           onClick={()=>{editor.chain().focus().setTextAlign('center').run()}}
            title="Align Center"
          >
            <AlignCenter size={20} />
          </button>
          <button 
           className={editor.isActive({textAlign:"right"})?btnActive:btnStyle}
           onClick={()=>{editor.chain().focus().setTextAlign('right').run()}}
            title="Align Right"
          >
            <AlignRight size={20} />
          </button>
          <button 
           className={editor.isActive({textAlign:"justify"})?btnActive:btnStyle}
           onClick={()=>{editor.chain().focus().setTextAlign('justify').run()}}
           disabled={!editor.can().chain().focus().setTextAlign('justify').run()}
            title="Justify"
          >
            <AlignJustify size={20} />
          </button>
        </div>
        <Dividor/>
        {/* Table */}
        <div className="flex items-center justify-center gap-1 p-2">
          <button 
            className={btnStyle}
            onClick={()=>{editor.chain().focus().insertTable({rows:2,cols:2,withHeaderRow: true}).run()}}
            title="Table"
          >
            <Table2 size={20} />
          </button>
        </div>

      </div>
      {editor.isActive('table') && (
        <div className="flex items-center gap-5 p-2 ">
          <button className={btnStyle} onClick={() => editor.chain().focus().addColumnBefore().run()} title="Add Column Before">
            <ArrowLeftToLine size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().addColumnAfter().run()} title="Add Column After">
            <ArrowRightToLine size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().deleteColumn().run()} title="Delete Column">
            <ChartColumnDecreasing size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().addRowBefore().run()} title="Add Row Before">
            <ArrowUpToLine size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().addRowAfter().run()} title="Add Row After">
            <ArrowDownToLine size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().deleteRow().run()} title="Delete Row">
            <Rows size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().deleteTable().run()} title="Delete Table">
            <Table2 size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().mergeCells().run()} title="Merge Cells">
            <Combine size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().splitCell().run()} title="Split Cell">
            <Split size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().toggleHeaderColumn().run()} title="Toggle Header Column">
            <TableProperties size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().toggleHeaderRow().run()} title="Toggle Header Row">
            <TableRowsSplit size={20} />
          </button>
          <button className={btnStyle} onClick={() => editor.chain().focus().toggleHeaderCell().run()} title="Toggle Header Cell">
            <TableCellsSplit size={20} />
          </button>
        </div>     
      )}
      </div>
        
    
    </>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Underlines.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  Highlight.configure({
    types: [TextStyle.name, ListItem.name],
    multicolor:true
  }),
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  }),
  Subscript.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  Superscript.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Table.configure({
    types: [ListItem.name],
    resizable: true,
    allowTableNodeSelection: true,
    HTMLAttributes:{
      class:"border border-slate-300 w-full table-auto"
    }
  }),
  TableRow.configure({
    HTMLAttributes:{
      class:"border border-slate-300"
    }
  }),
  TableCell.configure({
    HTMLAttributes:{
      class: "border border-slate-300 p-2"
    }
  }),
  TableHeader.configure({
    HTMLAttributes:{
      class:"border border-slate-300 p-2 bg-slate-200 font-bold",

    }
  }),
  Heading.configure({
    levels: [1, 2, 3],
  })
];

const content = `
  <h1>Edit Here</h1>
`;

const TextEditor = ({ text, setText=()=>{} }) => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      editorProps={{
        attributes: {
           style: "outline: none;line-height:2px;padding:30px;",
        }
      }}      
      extensions={extensions}
      onUpdate={({ editor }) => {
        setText(editor.getHTML());
      }}
    >
    </EditorProvider>  );
};

export default TextEditor;
