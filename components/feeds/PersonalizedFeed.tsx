"use client";

import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import ContentCard from "../cards/ContentCard";
import { fetchNews } from "../../redux/slices/newsSlice";
import { fetchMovies } from "../../redux/slices/movieSlice";
import { fetchSocialPosts } from "../../redux/slices/socialSlice";
import Pagination from "./pagination/Pagination";

interface PersonalizedFeedProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  debouncedQuery: string;
  setDebouncedQuery: (query: string) => void;
}

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ item, index, isWide, heightClass }: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 0,
    opacity: isDragging ? 0.5 : 1,
  };

  const spanClass = isWide ? "col-span-1 md:col-span-2" : "col-span-1";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${spanClass} cursor-grab active:cursor-grabbing`}
      {...attributes}
      {...listeners}
    >
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
}

export default function PersonalizedFeed({
  searchQuery,
  setSearchQuery,
  debouncedQuery,
  setDebouncedQuery,
}: PersonalizedFeedProps) {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<any[]>([]); 

  const news = useSelector((state: RootState) => state.news.articles);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const social = useSelector((state: RootState) => state.social.posts);
  const { status } = useSelector((state: RootState) => state.news);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    dispatch(fetchNews("technology"));
    dispatch(fetchMovies("28"));
    dispatch(fetchSocialPosts("trending"));
  }, [dispatch]);

  const unifiedFeed = useMemo(() => {
    const combined = [
      ...(news || []).map((item: any) => ({
        ...item,
        id: `news-${item.url}`, 
        title: item.title,
        description: item.description,
        category: "News",
        image: item.urlToImage,
        action: "Read More",
        source: item.source?.name || "News",
        time: new Date(item.publishedAt).toLocaleDateString(),
        type: "News",
      })),
      ...(movies || []).map((item: any) => ({
        ...item,
        id: `movie-${item.id}`,
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
        id: `social-${item.id}`,
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

    const target = debouncedQuery.toLowerCase();
    const filtered = combined.filter(
      (item) =>
        item.title?.toLowerCase().includes(target) ||
        item.description?.toLowerCase().includes(target)
    );
    
    return filtered;
  }, [news, movies, social, debouncedQuery]);

  useEffect(() => {
    setItems(unifiedFeed);
  }, [unifiedFeed]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const itemsPerPage = 8;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  if (status === "loading") {
    return <div className="text-center py-10">Loading your feed...</div>;
  }

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-y-5 sm:gap-6">
          <SortableContext
            items={displayedItems.map((i) => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {displayedItems.map((item, index) => {
              const isSocial = item.type === "Social";
              const isWide = index % 3 === 0;
              const heightClass = isSocial && isWide ? "h-auto" : "h-auto md:h-[460px]";

              return (
                <SortableItem
                  key={item.id}
                  item={item}
                  index={index}
                  isWide={isWide}
                  heightClass={heightClass}
                />
              );
            })}
          </SortableContext>
        </div>
      </DndContext>

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