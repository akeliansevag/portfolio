export const BASE_URL = "http://localhost:8080/wp-json/wp/v2";

export const BANNER_API = `${BASE_URL}/pages/9?_fields=acf.banner_image&acf_format=standard`;
export const HEADER_API = `${BASE_URL}/pages/9?_fields=acf.full_name,acf.title,acf.profile_pic&acf_format=standard`;
export const SOCIAL_MEDIAS_API = `${BASE_URL}/api/social-medias`;
export const ABOUT_API = `${BASE_URL}/api/about?populate=*`;
export const SKILLS_API = `${BASE_URL}/api/skills`;

