
export const GetSearchProduct = async (e) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/searchProduct?query=${e}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            cache: 'no-store'
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const GetProduct = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getProduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            cache: 'no-store'
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const GetPendingProduct = async (role, jenisBarang) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getPendingProduct?role=${role}&jenisBarang=${jenisBarang}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            cache: 'no-store'
        });
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}