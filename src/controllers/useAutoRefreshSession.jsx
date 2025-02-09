import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function UseAutoRefreshSession() {
    const { data: session, update } = useSession();

    useEffect(() => {
        if (!session) return;

        // Refresh token setiap 10 menit (600000 ms)
        const interval = setInterval(() => {
            update();
        }, 1 * 60 * 1000);

        return () => clearInterval(interval);
    }, [session, update]);
}
