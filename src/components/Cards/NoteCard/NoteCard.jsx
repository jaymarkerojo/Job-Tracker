import React from 'react'
import { MdOutlinePushPin } from 'react-icons/md'
import { MdCreate, MdDelete } from 'react-icons/md'


    const NoteCard = ({
        title,
        date,
        contents,
        tags,
        isPinned,
        onEdit,
        onDelete, 
        onPinNote
    }) => {
  return (
    <div className='border-rounded p-4 bg-white hover: shadow-xl transition-all ease-in-out '>
        <div className='flex items-center justify-between'>
        <div>
            <h6 className='text-sm font-medium'>{title}</h6>
            <span className='text-cs text-slate-500'>{date}</span>
        </div>

        <MdOutlinePushPin className={`icon-btn ${isPinned? 'text-blue-500' : 'text-slate-300'}`} onClick={onPinNote}/>
        </div>
        <p className=''>{contents?.slice(0, 60)}</p>
        <div className=''>
            <div className='text-xs text-slate-500'>{tags}</div>
        </div>
        <div className='flex-item-center gap-2'>
            <MdCreate
            className='icon-btn hover:text-green-600'
            onClick={onEdit}/>
            <MdDelete
            className='icon-btn hover:text-red-500'
            onClick={onDelete}/>
        </div>
    </div>
  )
}

export default NoteCard