export const BASE_URL = "https://backend.sevagakelian.com/wp-json";

export const BANNER_API = `${BASE_URL}/wp/v2/pages/9?_fields=acf.banner_image&acf_format=standard`;
export const HEADER_API = `${BASE_URL}/wp/v2/pages/9?_fields=acf.full_name,acf.title,acf.profile_pic&acf_format=standard`;
export const SOCIAL_MEDIAS_API = `${BASE_URL}/portfolio/social-media-icons`;
export const ABOUT_API = `${BASE_URL}/api/about?populate=*`;
export const SKILLS_API = `${BASE_URL}/api/skills`;

