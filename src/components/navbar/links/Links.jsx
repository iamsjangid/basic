'use client'
import React from 'react'
import Link from 'next/link'
import styles from '../links/links.module.css'
import NavLink from '../navlink/navLink'
import { useState } from 'react'
import Image from 'next/image'



const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Services',
        path: '/services'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
]
const Links = () => {
    const [open, setOpen] = useState(false)

    const isAdmin = false;
    const session = true;
    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}

                        <button className='logout'>LogOut</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            {/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button> */}
            {<Image className={styles.menuButton} src='/menu.png' width={40} height={40} alt='menu' onClick={() => setOpen((prev) => !prev)} />}
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Links
