import ContentCard from "../cards/ContentCard";

export default function PersonalizedFeed() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Personalized Feed</h2>

      <div className="space-y-4">
        <ContentCard
          title="Latest Tech News"
          description="New AI models are changing frontend development."
          action="Read More"
        />
        <ContentCard
          title="Movie Recommendation"
          description="Top-rated sci-fi movies you should watch."
          action="Play Now"
        />
        <ContentCard
          title="Social Post"
          description="#ReactJS is trending worldwide 🚀"
          action="View Post"
        />
      </div>
    </section>
  );
}