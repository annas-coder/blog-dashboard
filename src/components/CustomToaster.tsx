'use client'

import { INotify } from '@/Interface';
import toast from 'react-hot-toast';

export const notify = {
    success: ({ message }: INotify) => toast.success(message, { position: 'top-right' }),
    error: ({ message }: INotify) => toast.error(message, { position: 'top-right' }),
    default: ({ message }: INotify) => toast(message, { position: 'top-right' }),
};