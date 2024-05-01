// "use client"
import { Header } from '@/components/common';
import Restaurant from '@/components/ui/Restaurant/Restaurant';
import { useGetAllFoodQuery } from '@/redux/features/getFoods';
import Button from '@mui/material/Button';
import { Toaster } from 'sonner';

export default function Home() {

  // const { data } = useGetAllFoodQuery({})

  // console.log("data >>>", data)

  return (
    <main className="md:px-2 px-5">
      <Toaster richColors />
      <Header />
      <Restaurant />
    </main>
  );
}
