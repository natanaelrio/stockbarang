'use server'
import { revalidatePath } from 'next/cache';

export const GetDataUser = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getDataUser?query=${e}`, {
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
        return data.data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}


export const CreateNotifikasiSales = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createNotifikasiSales`, {
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
export const UpdateProductIndentIncrement = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateProductIndentIncrement`, {
            method: 'PUT',
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
export const UpdateProductIndentDecrement = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateProductIndentDecrement`, {
            method: 'PUT',
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

export const updateJenisBarang = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateJenisBarang`, {
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
export const UpdateStatusPending = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateStatusPending`, {
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

export const DeleteListUtama = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/deleteListUtama?id=${e}`, {
            method: 'DELETE',
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


export const DeletePending = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/deletePending?id=${e}`, {
            method: 'DELETE',
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


export const GetNotifikasiSales = async (username) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getNotifikasiSales?username=${username}`, {
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

export const GetHistoryProduct = async (id, jenisBarangId) => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getHistoryProduct?id=${id}&jenisBarangId=${jenisBarangId}`, {
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