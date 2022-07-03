import { Link } from 'gatsby';
import * as React from 'react';
import { SocialLink } from '../components/SocialLink';
import { BasicLayout } from '../layouts';

export default function IndexPage() {
  return (
    <BasicLayout>
      <h1>Hi, I’m Bruno, a software engineer.</h1>

      <p>
        Currently, I’m working at{' '}
        <SocialLink color="var(--next--color-primary)" href="https://next.me">
          Banco next
        </SocialLink>
        and on open-source projects. I’ve created{' '}
        <SocialLink
          color="var(--v8n--color-primary)"
          href="https://github.com/imbrn/v8n"
        >
          v8n
        </SocialLink>
        , a fluent javascript validation library. I’m also an aspiring{' '}
        <SocialLink
          color="var(--blog--color-primary)"
          href="https://imbrn.dev/blog"
        >
          blog writer
        </SocialLink>
        . Sometimes I write my thoughts on{' '}
        <SocialLink
          color="var(--twitter--color-primary)"
          href="https://twitter.com/bruno02221"
        >
          Twitter
        </SocialLink>
        .
      </p>

      <p>
        I’m passionate by software engineering good practices, patterns,
        principles, and I struggle to learn all about it and to share with
        everyone around me.
      </p>
    </BasicLayout>
  );
}
