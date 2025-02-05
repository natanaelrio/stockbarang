export const GetCurrentDateTimeGMT7 = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Jakarta' };

    const year = now.toLocaleString('id-ID', { ...options, year: 'numeric' });
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    const millisecond = String(now.getMilliseconds()).padStart(3, "0");

    return `${year}${month}${day}${hour}${minute}${second}${millisecond}`;
};