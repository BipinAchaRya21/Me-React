import React from 'react'
import { useLoaderData } from 'react-router-dom'

export async function githubInfoLoader() {
    const response = await fetch('https://api.github.com/users/BipinAchaRya21')

    if (!response.ok) {
        throw new Response('Unable to load GitHub profile', { status: response.status })
    }

    return response.json()
}

export default function Github() {
    const profile = useLoaderData()

    return (
        <main className="grid min-h-[500px] place-items-center bg-gray-50 px-4 py-16">
            <section className="max-w-md text-center">
                <img
                    className="mx-auto h-32 w-32 rounded-full shadow"
                    src={profile.avatar_url}
                    alt={`${profile.login} avatar`}
                />
                <h1 className="mt-6 text-3xl font-bold text-gray-900">{profile.name || profile.login}</h1>
                <p className="mt-2 text-gray-600">{profile.bio || 'GitHub profile'}</p>
                <p className="mt-4 text-sm text-gray-500">{profile.followers} followers</p>
                <a
                    className="mt-6 inline-block rounded-lg bg-orange-700 px-5 py-3 font-medium text-white hover:bg-orange-800"
                    href={profile.html_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    View on GitHub
                </a>
            </section>
        </main>
    )
}
