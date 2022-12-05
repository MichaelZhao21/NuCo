import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../../config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Admin() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const q2 = query(collection(db, 'users'));
            const querySnapshot2 = await getDocs(q2);
            setUsers(
                querySnapshot2.docs.map((d) => ({
                    username: d.get('username'),
                    role: d.get('role'),
                }))
            );
        })();
    });

    return (
        <div>
            <div
                style={{
                    height: '80vh',
                    width: '80vw',
                    marginLeft: '10vw',
                    marginTop: '10vh',
                    backgroundColor: '#D9D9D9',
                    paddingTop: '1rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: '2rem',
                    }}
                >
                    <button style={{ fontSize: '1.5rem' }}>Analytics</button>
                    <button style={{ fontSize: '1.5rem' }}>
                        <a href="/admin/add">Add Member</a>
                    </button>
                    <button style={{ fontSize: '1.5rem' }}>Settings</button>
                </div>
                <p
                    style={{
                        color: 'black',
                        marginLeft: '1rem',
                        fontSize: '2rem',
                        marginTop: '3rem',
                    }}
                >
                    All NuCo Users
                </p>
                {users.map((user) => (
                    <div
                        key={user.username}
                        style={{
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '0 2rem',
                            fontSize: '1.5rem',
                            padding: '0.5rem',
                        }}
                        className="coach"
                    >
                        <div className="coach-user" style={{ flexBasis: '50%' }}>
                            Username: {user.username}
                        </div>
                        <div
                            className="coach-user"
                            style={{ flexBasis: '50%', paddingLeft: '2rem' }}
                        >
                            Role: {user.role}
                        </div>
                    </div>
                ))}
            </div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -100,
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Image
                    src="/user-background.png"
                    fill
                    alt="background"
                    style={{ backgroundSize: 'contain', zIndex: -100 }}
                />
            </div>
        </div>
    );
}
