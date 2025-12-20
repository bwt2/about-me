import type { Config } from '@react-router/dev/config';

export default {
  ssr: false,
  async prerender({ getStaticPaths }) {
    const staticPaths = await getStaticPaths();
    return [...staticPaths];
  },
} satisfies Config;
