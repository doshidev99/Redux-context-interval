import { TPost } from 'model/post';
import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next';
import { Container } from '.';

const DetailPost = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Container>
        <div>
          <h1>Post page detail</h1>
          <strong>
            <small>{post.id}: </small>
          </strong>
          <small>{post.title}</small>
        </div>
      </Container>
    </div>
  );
};

export default DetailPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: TPost[] = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// getStaticPaths is required for dynamic SSG pages and is missing for '/post/[id]'.
// Read more: https://err.sh/next.js/invalid-getstaticpaths-value

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const emptyPost: TPost = {
    title: 'Post not found',
    body: '',
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: TPost = await res.json();

  return {
    props: {
      post,
    },
  };
};
