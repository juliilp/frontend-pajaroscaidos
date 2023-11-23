import News from "@/components/Noticias/News";

const Page = ({ params }) => {
  return (
    <div className="mt-16">
      <News id={params.id} />
    </div>
  );
};

export default Page;
