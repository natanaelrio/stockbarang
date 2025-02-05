'use server'
import { revalidatePath } from 'next/cache';

export const CreateActivity = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createActivity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            },
            body: JSON.stringify(e),
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}
export const CreateProduct = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            },
            body: JSON.stringify(e),
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}

export const CreateProductPendding = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createPendingProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            },
            body: JSON.stringify(e),
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}

export const GetProduct = async () => {
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
export const GetPendingProduct = async (role) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getPendingProduct?role=${role}`, {
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

export const GetSearchProductID = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/searchProductID?query=${e}`, {
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
export const GetSearchProduct = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/searchProduct?query=${e}`, {
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

export const UpdateIncrement = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateProductIncrement`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            body: JSON.stringify(e),
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

export const UpdateDecrement = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateProductDecrement`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            body: JSON.stringify(e),
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


export const GetLogActivity = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getLogActivity`, {
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