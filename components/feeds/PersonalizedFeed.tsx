"use client";

import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import ContentCard from "../cards/ContentCard";
import { fetchNews } from "@/redux/slices/newsSlice";
import { fetchMovies } from "@/redux/slices/movieSlice";
import { fetchSocialPosts } from "@/redux/slices/socialSlice";
import Pagination from "./pagination/Pagination";

export default function PersonalizedFeed() {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);

  // Updated to 8 cards per page
  const itemsPerPage = 6;

  const news = useSelector((state: RootState) => state.news.articles);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const social = useSelector((state: RootState) => state.social.posts);
  const { status } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNews("technology"));
    dispatch(fetchMovies("28"));
    dispatch(fetchSocialPosts("trending"));
  }, [dispatch]);

  const unifiedFeed = useMemo(() => {
    const combined = [
      ...(news || []).map((item: any) => ({
        ...item,
        id: Date.now() + Math.random(),
        title: item.title,
        description:
          item.description?.length > 70
            ? `${item.description.substring(0, 70)}...`
            : item.description,
        category: "News",
        image: item.urlToImage,
        action: "Read More",
        source: item.source?.name || "News",
        time: new Date(item.publishedAt).toLocaleDateString(),
        type: "News",
      })),
      ...(movies || []).map((item: any) => ({
        ...item,
        id: Date.now() + Math.random(),
        title: item.name,
        description: item.summary?.replace(/<[^>]*>?/gm, ""),
        category: "Movies",
        image: item.image?.original || item.image?.medium,
        action: "Watch Now",
        source: item.network?.name || "Streaming",
        time: item.premiered,
        type: "Movies",
      })),
      ...(social || []).map((item: any) => ({
        ...item,
        id: Date.now() + Math.random(),
        title: item.user,
        description: item.content,
        category: "Social",
        image: `https://ui-avatars.com/api/?name=${item.user}&background=random`,
        action: "Join Discussion",
        source: "Social Feed",
        time: `${item.likes} Likes`,
        type: "Social",
      })),
    ];

    return [...combined].sort(() => Math.random() - 0.5);
  }, [news, movies, social]);

  const totalPages = Math.ceil(unifiedFeed.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = unifiedFeed.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  if (status === "loading") {
    return <div className="text-center py-10">Loading your feed...</div>;
  }

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-y-5 sm:gap-6">
        {displayedItems.map((item, index) => {
          const isSocial = item.type === "Social";
          const isWide = index % 3 === 0;

          const spanClass = isWide ? "col-span-1 md:col-span-2" : "col-span-1";
          const heightClass =
            isSocial && isWide ? "h-auto" : "h-auto md:h-[450px]";

          const isTriggerCard = index === displayedItems.length - 5;

          return (
            <div key={`${item.type}-${index}`} className={spanClass}>
              <ContentCard
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                time={`${item.source} • ${item.time}`}
                image={item.image}
                action={item.action}
                orientation="vertical"
                className={heightClass}
              />
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
}
