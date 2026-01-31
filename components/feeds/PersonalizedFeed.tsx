import ContentCard from "../cards/ContentCard";
import { HiOutlineSparkles, HiOutlineFilter } from "react-icons/hi";

export default function PersonalizedFeed() {
  const feedItems = [
    {
      title:
        "TikTok star Khaby Lame signs $975 million AI deal to create his digital twin",
      description:
        "The world's most-followed TikToker is venturing into the metaverse with a massive AI partnership.",
      category: "News",
      time: "1d ago",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      action: "Read More",
      source: "News18",
    },
    {
      title: "On the sets of Ramsay Brothers' Shaitani Ilaaka (1990)",
      description:
        "A nostalgic look back at the cult classic horror film featuring Kanwaljit Singh and the Ramsay legacy.",
      category: "Movies",
      time: "Trending",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      action: "Watch Feature",
      source: "Lehren",
    },
    {
      title: "Parth emerges as key aide in political affairs",
      description:
        "New leadership dynamics surfacing as Son Parth takes a central role in Sunetra Pawar’s latest campaigns.",
      category: "Social",
      time: "2h ago",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      action: "Join Discussion",
      source: "Hindustan Times",
    },
    {
      title:
        "TikTok star Khaby Lame signs $975 million AI deal to create his digital twin",
      description:
        "The world's most-followed TikToker is venturing into the metaverse with a massive AI partnership.",
      category: "News",
      time: "1d ago",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      action: "Read More",
      source: "News18",
    },
    {
      title: "On the sets of Ramsay Brothers' Shaitani Ilaaka (1990)",
      description:
        "A nostalgic look back at the cult classic horror film featuring Kanwaljit Singh and the Ramsay legacy.",
      category: "Movies",
      time: "Trending",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      action: "Watch Feature",
      source: "Lehren",
    },
    {
      title: "Parth emerges as key aide in political affairs",
      description:
        "New leadership dynamics surfacing as Son Parth takes a central role in Sunetra Pawar’s latest campaigns.",
      category: "Social",
      time: "2h ago",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      action: "Join Discussion",
      source: "Hindustan Times",
    },
    {
      title:
        "TikTok star Khaby Lame signs $975 million AI deal to create his digital twin",
      description:
        "The world's most-followed TikToker is venturing into the metaverse with a massive AI partnership.",
      category: "News",
      time: "1d ago",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      action: "Read More",
      source: "News18",
    },
    {
      title: "On the sets of Ramsay Brothers' Shaitani Ilaaka (1990)",
      description:
        "A nostalgic look back at the cult classic horror film featuring Kanwaljit Singh and the Ramsay legacy.",
      category: "Movies",
      time: "Trending",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      action: "Watch Feature",
      source: "Lehren",
    },
    {
      title: "Parth emerges as key aide in political affairs",
      description:
        "New leadership dynamics surfacing as Son Parth takes a central role in Sunetra Pawar’s latest campaigns.",
      category: "Social",
      time: "2h ago",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      action: "Join Discussion",
      source: "Hindustan Times",
    },
    {
      title:
        "TikTok star Khaby Lame signs $975 million AI deal to create his digital twin",
      description:
        "The world's most-followed TikToker is venturing into the metaverse with a massive AI partnership.",
      category: "News",
      time: "1d ago",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      action: "Read More",
      source: "News18",
    },
    {
      title: "On the sets of Ramsay Brothers' Shaitani Ilaaka (1990)",
      description:
        "A nostalgic look back at the cult classic horror film featuring Kanwaljit Singh and the Ramsay legacy.",
      category: "Movies",
      time: "Trending",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      action: "Watch Feature",
      source: "Lehren",
    },
    {
      title: "Parth emerges as key aide in political affairs",
      description:
        "New leadership dynamics surfacing as Son Parth takes a central role in Sunetra Pawar’s latest campaigns.",
      category: "Social",
      time: "2h ago",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      action: "Join Discussion",
      source: "Hindustan Times",
    },
    {
      title:
        "TikTok star Khaby Lame signs $975 million AI deal to create his digital twin",
      description:
        "The world's most-followed TikToker is venturing into the metaverse with a massive AI partnership.",
      category: "News",
      time: "1d ago",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      action: "Read More",
      source: "News18",
    },
    {
      title: "On the sets of Ramsay Brothers' Shaitani Ilaaka (1990)",
      description:
        "A nostalgic look back at the cult classic horror film featuring Kanwaljit Singh and the Ramsay legacy.",
      category: "Movies",
      time: "Trending",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      action: "Watch Feature",
      source: "Lehren",
    },
    {
      title: "Parth emerges as key aide in political affairs",
      description:
        "New leadership dynamics surfacing as Son Parth takes a central role in Sunetra Pawar’s latest campaigns.",
      category: "Social",
      time: "2h ago",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      action: "Join Discussion",
      source: "Hindustan Times",
    },
  ];

  const getRandomSpan = () =>
    Math.random() > 0.6 ? "col-span-1 md:col-span-2" : "col-span-1";

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-y-5 sm:gap-6">
        {feedItems.map((item, index) => {
          const spanClass = getRandomSpan();

          return (
            <div key={index} className={spanClass}>
              <ContentCard
                title={item.title}
                description={item.description}
                category={item.category}
                time={`${item.source} • ${item.time}`}
                image={item.image}
                action={item.action}
                orientation={
                  spanClass !== "col-span-1" ? "vertical" : "vertical"
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
