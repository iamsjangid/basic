import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div>
            <h1>Page you are loong for is not available</h1>
            <p><Link href='/'>Go to Home</Link></p>
        </div>
    )
}

export default NotFound
