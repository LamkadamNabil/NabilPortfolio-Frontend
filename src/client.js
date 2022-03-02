import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'fij0fiij',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.NABIL_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);