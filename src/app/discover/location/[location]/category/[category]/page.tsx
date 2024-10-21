import CategoryPage from "@/app/discover/[category]/page";

interface categoryProps {
  params: {
    category?: string;
    location?: string;
  };
}

export default async function page({ params }: categoryProps) {
  return <CategoryPage params={params} />;
}
