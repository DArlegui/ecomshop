import { deleteBanner } from '@/app/actions/actions';
import { SubmitButton } from '@/components/SubmitButtons';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function DeleteBannerRoute({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete the banner and all of its data.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-start space-x-6">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/banner">Cancel</Link>
          </Button>
          <form action={deleteBanner}>
            <input type="hidden" name="bannerId" value={params.id} />
            <SubmitButton text="Delete Product" variant="destructive" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
