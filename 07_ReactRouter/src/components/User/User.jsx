import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { userid } = useParams()

    return (
        <main className="grid min-h-[500px] place-items-center bg-gray-50 px-4">
            <section className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">User profile</p>
                <h1 className="mt-3 text-4xl font-bold text-gray-900">{userid}</h1>
                <p className="mt-3 text-gray-600">Welcome to the user page.</p>
            </section>
        </main>
    )
}
