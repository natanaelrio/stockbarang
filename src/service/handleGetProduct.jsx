'use server'
import { revalidatePath } from 'next/cache';

export default async function HandleGetProduct() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getProduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}
