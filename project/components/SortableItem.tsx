// //components/SortableItem.tsx
// 'use client'

// import { useSortable } from '@dnd-kit/sortable'
// import { CSS } from '@dnd-kit/utilities'
// import { ReactNode } from 'react'

// export default function SortableItem({ id, children }: { id: string, children: ReactNode }) {
//   const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.5 : 1,
//   }

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       {children}
//     </div>
//   )
// }
