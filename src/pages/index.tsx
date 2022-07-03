import { Link } from 'gatsby';
import * as React from 'react';
import { BasicLayout } from '../layouts';

export default function IndexPage() {
  return (
    <BasicLayout>
      <h1>Hi, I’m Bruno, a software engineer.</h1>

      <p>
        Currently, I’m working at{' '}
        <b style={{ color: 'var(--next--color-primary)' }}>
          <Link to="https://next.me" target="_blank" rel="noopener noreferrer">
            Banco next
          </Link>{' '}
        </b>
        and on open-source projects. I’ve created{' '}
        <b style={{ color: 'var(--v8n--color-primary)' }}>
          <Link
            to="https://github.com/imbrn/v8n"
            target="_blank"
            rel="noopener noreferrer"
          >
            v8n
          </Link>
        </b>
        , a fluent javascript validation library. I’m also an aspiring{' '}
        <b style={{ color: 'var(--blog--color-primary)' }}>
          <Link
            to="https://imbrn.dev/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog writer
          </Link>
        </b>
        . Sometimes I write my thoughts on{' '}
        <b style={{ color: 'var(--twitter--color-primary)' }}>
          <Link
            to="https://twitter.com/bruno02221"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
        </b>
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
