export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;


  return (
    <main className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Product ID: {id}</h1>
      <p className="mt-4 text-gray-600"></p>
   
    </main>
  );
}