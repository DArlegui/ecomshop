//Creating User in DB and redirecting to home page
import prisma from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

// Make sure to not "export default async function"
export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    //Checks for user valid session
    throw new Error('Something went wrong with creating user...');
  }

  // upsert handles both finding and creating in a single query, reducing the number of database interactions.
  await prisma.user.upsert({
    where: { id: user.id },
    update: {},
    create: {
      id: user.id,
      firstName: user.given_name ?? '',
      lastName: user.family_name ?? '',
      email: user.email ?? '',
      createdAt: new Date(),
      profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
    },
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/dashboard`);
}
