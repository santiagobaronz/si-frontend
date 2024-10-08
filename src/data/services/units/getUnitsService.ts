import { getStrapiURL } from "@/lib/utils/getStrapiURL";
import { getAuthToken } from "../get-token";

const baseUrl = getStrapiURL();

export async function getUnitsService() {
    const url = new URL("/api/units?fields[0]=name&fields[1]=is_active&fields[2]=slug&populate[image][fields][0]=url&populate[image][fields][1]=name", baseUrl);

    const authToken = await getAuthToken();

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            cache: "no-cache",
        });

        return response.json();
    } catch (error) {
        console.error("Units Service Error:", error);
    }
}