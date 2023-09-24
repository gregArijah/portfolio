'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" disabled={pending} className="w-36 px-auto py-1 bg-slate-300 text-slate-800 font-bold rounded-lg hover:bg-slate-500 transition duration-300 disabled:bg-slate-500">
        {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}