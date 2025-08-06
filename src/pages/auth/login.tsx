import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/api/auth-api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/user-store';
import TextInput from '../../components/common/text-input';
import { LABELS } from '../../constants/labels';
import type { LoginCredentials } from '../../types';

const loginSchema = z.object({
  email: z.string().email(LABELS.INVALID_EMAIL),
  password: z.string().min(6, LABELS.PASSWORD_MIN_LENGTH),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const result = await login(data).unwrap();

      if (result.success) {
        dispatch(setUser(result.data.user));
        navigate('/posts');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      setError('root', {
        type: 'manual',
        message: LABELS.LOGIN_ERROR,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center text-gray-500 text-sm">Email: Test@example.common</div>
        <div className="text-center text-gray-500 text-sm">Password: Test@123</div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{LABELS.LOGIN}</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <TextInput
              label={LABELS.EMAIL}
              type="email"
              required
              {...register('email')}
              error={errors.email?.message}
            />

            <TextInput
              label={LABELS.PASSWORD}
              type="password"
              required
              {...register('password')}
              error={errors.password?.message}
            />
          </div>

          {errors.root && (
            <div className="text-red-600 text-sm text-center">{errors.root.message}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`
                group relative w-full flex justify-center py-2 px-4 border border-transparent 
                text-sm font-medium rounded-md text-white 
                ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              `}
            >
              {isLoading ? LABELS.LOADING : LABELS.LOGIN}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              {LABELS.DONT_HAVE_ACCOUNT}{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                {LABELS.SIGNUP}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
