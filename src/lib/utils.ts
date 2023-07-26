import { clsx,type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createDefaultImageCover(data: any) {
  let queryString;
  try {
    const params = {
      head: "Blog",
      writer: "Punk Blogger",
      logo: "https://avatars.githubusercontent.com/u/89759498?s=100",
      template: "facebook-minimal",
      title: data.title,
      author: data.username,
    };

    queryString = Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");
    } catch (error) {
      queryString = " ";
    }
    const defaultImgUrl = `https://og-image-rest-generator.fly.dev/seo-banner?${queryString}`;
  return defaultImgUrl;
}
