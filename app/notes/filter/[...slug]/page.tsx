import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import ALL_NOTES from "@/lib/all";

interface propsFilterPage {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterPage({ params }: propsFilterPage) {
  const { slug } = await params;
  const searchSlug = slug[0] === ALL_NOTES ? undefined : slug[0];
  const query = "";
  const page = 1;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", query, page],
    queryFn: () => fetchNotes(query, page, searchSlug),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
