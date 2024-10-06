'use server';
import prisma from '@/lib/db';
import { productSchema } from '@/lib/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  // Suppose submission.value.images is:
  // ["http://example.com/image1.jpg, http://example.com/image2.jpg", "http://example.com/image3.jpg"]
  // The flattenUrls will end up being:
  // ["http://example.com/image1.jpg", "http://example.com/image2.jpg", "http://example.com/image3.jpg"]
  const flattenUrls = submission.value.images.flatMap((urlString) => urlString.split(',').map((url) => url.trim()));

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect('/dashboard/products');
}

export async function editProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) => urlString.split(',').map((url) => url.trim()));
  const productId = formData.get('productId') as string;

  await prisma.product.update({
    where: {
      id: productId,
    },

    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect('/dashboard/products');
}
