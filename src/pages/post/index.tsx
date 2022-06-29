import { TPost } from 'model/post';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

export default function PostPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <h1>Post page</h1>
      <div>
        <ol>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                  <small>{post.title}</small>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: TPost[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
