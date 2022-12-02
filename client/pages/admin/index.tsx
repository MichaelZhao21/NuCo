import Image from 'next/image';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import firebaseConfig from '../../config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Admin() {
    return (
        <div style={{ position: 'absolute', zIndex: -100, width: '100vw', height: '100vh' }}>
            <Image
                src="/background.png"
                fill
                alt="background"
                style={{ objectFit: 'cover', zIndex: -100 }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                Admin Dashboard
            </div>
        </div>
    );
}
