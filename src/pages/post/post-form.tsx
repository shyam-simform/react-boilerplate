import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostByIdQuery,
} from '../../store/api/post-api';
import TextInput from '../../components/common/text-input';
import FileUpload from '../../components/common/file-upload';
import { LABELS } from '../../constants/labels';

const postSchema = z.object({
  title: z.string().min(1, LABELS.REQUIRED_FIELD),
  content: z.string().min(1, LABELS.REQUIRED_FIELD),
});

interface PostFormData {
  title: string;
  content: string;
}

const PostForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>('');

  const { data: postData, isLoading: isLoadingPost } = useGetPostByIdQuery(id!, {
    skip: !isEdit,
  });

  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  useEffect(() => {
    if (isEdit && postData?.success) {
      const post = postData.data;
      setValue('title', post.title);
      setValue('content', post.content);
    }
  }, [isEdit, postData, setValue]);

  const onSubmit = async (data: PostFormData) => {
    try {
      setFileError('');

      const postData = {
        ...data,
        image: selectedFiles[0],
      };

      if (isEdit && id) {
        await updatePost({ id, ...postData }).unwrap();
      } else {
        await createPost(postData).unwrap();
      }

      navigate('/posts');
    } catch (error: unknown) {
      console.error('Post save error:', error);
      setError('root', {
        type: 'manual',
        message: isEdit ? 'Failed to update post' : 'Failed to create post',
      });
    }
  };

  const handleFilesChange = (files: File[]) => {
    setSelectedFiles(files);
    setFileError('');
  };

  if (isEdit && isLoadingPost) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-lg">{LABELS.LOADING}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/posts')}
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            ← {LABELS.BACK}
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEdit ? LABELS.EDIT_POST : LABELS.ADD_POST}
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput
            label={LABELS.POST_TITLE}
            type="text"
            required
            {...register('title')}
            error={errors.title?.message}
          />

          <TextInput
            label={LABELS.POST_CONTENT}
            type="textarea"
            rows={6}
            required
            {...register('content')}
            error={errors.content?.message}
          />

          <FileUpload
            allowedFormats={['jpg', 'jpeg', 'png', 'gif', 'webp']}
            maxFileSize={5 * 1024 * 1024} // 5MB
            maxFiles={1}
            onFilesChange={handleFilesChange}
            currentFiles={selectedFiles}
            error={fileError}
          />

          {errors.root && <div className="text-red-600 text-sm">{errors.root.message}</div>}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/posts')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              {LABELS.CANCEL}
            </button>

            <button
              type="submit"
              disabled={isCreating || isUpdating}
              className={`
                px-4 py-2 border border-transparent rounded-md text-white 
                ${
                  isCreating || isUpdating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }
              `}
            >
              {isCreating || isUpdating
                ? LABELS.LOADING
                : isEdit
                  ? LABELS.UPDATE_POST
                  : LABELS.CREATE_POST}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
