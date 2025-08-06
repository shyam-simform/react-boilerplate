import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery, useDeletePostMutation } from '../../store/api/post-api';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { LABELS } from '../../constants/labels';

const PostList: React.FC = () => {
  const { data: postsData, isLoading, error, refetch } = useGetAllPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const currentUser = useSelector((state: RootState) => state.user.user);

  const handleDelete = async (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(postId).unwrap();
        refetch();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-lg">{LABELS.LOADING}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">Error loading posts. Please try again later.</div>
      </div>
    );
  }

  const posts = postsData?.data || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{LABELS.POSTS}</h1>
        <Link
          to="/posts/add"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {LABELS.ADD_POST}
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">No posts found.</p>
          <Link
            to="/posts/add"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {LABELS.CREATE_POST}
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.imageUrl && (
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {post.user.fullName}</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {LABELS.EDIT}
                  </Link>

                  {currentUser?.id === post.userId && (
                    <div className="space-x-2">
                      <Link
                        to={`/posts/edit/${post.id}`}
                        className="text-green-600 hover:text-green-800 font-medium"
                      >
                        {LABELS.EDIT}
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        {LABELS.DELETE}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
