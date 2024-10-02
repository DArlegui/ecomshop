'use client';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import React from 'react';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button type="submit">Create Product</Button>
      )}
    </>
  );
}
