const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function request(endpoint, options = {}){
    const token = localStorage.getItem('accessToken');

    const headers = {
        'Content-Type' : 'application/json',
        ...(token ? {Authorization: `Bearer ${token}`} : {}),
        ...options.headers
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}` ,{
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || errorData.title || `Request Failed with status ${response.status}`)
    }

    if (response.status === 204) return null;

    return response.json();
}