import Image from 'next/image';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../../config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Coach() {
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
                    }}
                >
                    <button style={{ fontSize: '1.5rem' }}>Analytics</button>
                    <button style={{ fontSize: '1.5rem' }}>Edit Member</button>
                    <button style={{ fontSize: '1.5rem' }}>Settings</button>
                </div>
                <p style={{ color: 'black', marginLeft: '1rem' }}>Latest NuCo Users from your gym:</p>
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
