import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../../config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Coach() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const username = window.location.search.replace('?username=', '');
            console.log(username);

            const q = query(collection(db, 'users'), where('username', '==', username));
            const querySnapshot = await getDocs(q);
            const user = querySnapshot.docs[0];

            if (user == null) return;

            const q2 = query(
                collection(db, 'users'),
                where('gym', '==', 'a'),
                where('username', '!=', username)
            );
            const querySnapshot2 = await getDocs(q2);
            setUsers(
                querySnapshot2.docs.map((d) => ({
                    username: d.get('username'),
                    pass: d.get('pass'),
                    date: d.get('date'),
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
                    <button style={{ fontSize: '1.5rem' }}>Edit Member</button>
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
                    Latest NuCo Users from your gym:
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
                        <div className="coach-user" style={{ flexBasis: '33%' }}>
                            Username: {user.username}
                        </div>
                        <div
                            className="coach-user"
                            style={{ flexBasis: '33%', paddingLeft: '2rem' }}
                        >
                            Pass Type: {user.pass}
                        </div>
                        <div
                            className="coach-user"
                            style={{ flexBasis: '33%', textAlign: 'right' }}
                        >
                            Member Since: {user.date}
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
