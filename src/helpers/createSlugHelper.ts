import slugify from 'slugify';

export function createSlug(text: string) {
  const slug = slugify(text, {
    lower: true,
    strict: true,
    locale: 'vi',
  });
  return slug;
}
