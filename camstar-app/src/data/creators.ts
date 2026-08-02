export interface Creator {
  id: string;
  name: string;
  state: string;
  category: string;
  languages?: string[];
  followers: {
    instagram?: number;
    youtube?: number;
    facebook?: number;
  };
  socialLinks: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
  };
  imageUrl: string;
  isVerified: boolean;
}

export const fetchCreators = async (): Promise<Creator[]> => {
  try {
    const res = await fetch('/api/creators');
    if (!res.ok) {
      throw new Error(`Failed to fetch creators: ${res.statusText}`);
    }
    const data = await res.json();
    return data as Creator[];
  } catch (error) {
    console.error("Error fetching creators:", error);
    return [];
  }
};
