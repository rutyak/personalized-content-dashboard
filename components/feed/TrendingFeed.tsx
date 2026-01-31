import ContentCard from "@/components/cards/ContentCard";

export default function TrendingFeed() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Trending</h2>

      <div className="space-y-3">
        <ContentCard title="Trending News" description="Markets are up today" action="Read" />
        <ContentCard title="Trending Movie" description="New Marvel release" action="Play" />
      </div>
    </section>
  );
}