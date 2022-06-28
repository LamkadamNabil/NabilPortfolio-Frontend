import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'fij0fiij',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token:'skc3Iw7OHoz1VKLGAjRmcFWnwYvkPbZIUHJgYSg4SXu5fwIWYDw8tVouUWVzkQn9qYRgUfdGfl1fD7xOFyu3P4UgtgVtj3EkrqV6w4hMx8Zi2BfiWzMKeLEsfiQQorGWoxGkqCsFeLJ7wdqzbDCwa46ALcfP6eeiKeZlTboiNlfGLaIC91bb',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);